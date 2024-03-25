// require('dotenv').config();

const sharedPostgresConfig = {
  client: "pg",
  connection: {
    host: process.env.DB_HOST || 'localhost', // Use the correct default or ensure the environment variable is set
    user: process.env.DB_USER || 'testuser', // Default to 'testuser' or ensure the environment variable is set
    password: process.env.DB_PASS || 'testpassword', // Same as above
    database: process.env.DB_NAME || 'testdb', // Same as above
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
