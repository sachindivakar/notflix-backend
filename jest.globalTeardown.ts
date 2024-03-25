import knex from 'knex';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./knexfile').test;

const globalTeardown = async () => {
  const db = knex(config);
  await db.migrate.rollback();
  await db.destroy();
};

export default globalTeardown;
