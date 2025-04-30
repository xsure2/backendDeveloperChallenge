export function up(knex) {
    return knex.schema.createTable('tests', (table) => {
      table.increments('id').primary();
      table.integer('tester_id').unsigned().references('id').inTable('testers').onDelete('CASCADE');
      table.integer('product_id').unsigned().references('id').inTable('products').onDelete('CASCADE');
      table.string('size').notNullable();
    });
  }
  
  export function down(knex) {
    return knex.schema.dropTable('tests');
  }
  