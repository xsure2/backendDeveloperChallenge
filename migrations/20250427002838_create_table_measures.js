
export function up(knex) {
    return knex.schema.createTable('measures', (table) => {
        table.increments('id').primary();
        table.timestamp('creation_date').defaultTo(knex.fn.now());
        table.float('height').notNullable();
        table.float('weight').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  
};

export function down(knex) {
    return knex.schema.dropTableIfExists('measures');  
};
