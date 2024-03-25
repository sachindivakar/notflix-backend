import knex from 'knex';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const knexConfig = require('../../knexfile');

// Determine the environment (development, production, etc.)
const environment = process.env.NODE_ENV || 'development';

// Initialize knex with the configuration for the current environment
const config = knexConfig[environment];
const db = knex(config);

export default db;
