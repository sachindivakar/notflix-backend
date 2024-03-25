// require('dotenv').config();

const sharedPostgresConfig = {
  client: "pg",
  connection: {
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  },
  pool: { min: 2, max: 10 },
  migrations: {
    tableName: "knex_migrations",
    directory: "./src/migrations",
  },
};

module.exports = {
  development: {
    ...sharedPostgresConfig,
  },
  staging: {
    ...sharedPostgresConfig,
  },
  production: {
    ...sharedPostgresConfig,
  },
  test: {
    ...sharedPostgresConfig,
  },
};
