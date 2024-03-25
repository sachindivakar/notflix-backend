exports.up = function (knex) {
  return knex.schema.createTable("videos", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.text("description");
    table.string("url").notNullable();
    // table.integer('userId').references('id').inTable('users');
    table.decimal("price", 10, 2);
    table.timestamp("uploadDate").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("videos");
};
