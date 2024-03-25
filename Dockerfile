
FROM node:20-slim as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .


RUN npm run build


# Development stage installs all dependencies including devDependencies
FROM base as development
RUN npm install --only=development
COPY . .
RUN npm run build

# Test stage runs tests using development build
FROM development as test
RUN npm test


FROM node:20-slim

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/gauth.json ./gauth.json
COPY package*.json ./

RUN npm install --production

USER node

EXPOSE 3000

CMD [ "node", "dist/server.js" ]