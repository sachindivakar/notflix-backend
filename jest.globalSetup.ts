import knex from 'knex';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./knexfile').test;

const globalSetup = async () => {
  const db = knex(config);
  await db.migrate.latest();
  await db.destroy();
};

export default globalSetup;
