
export function up(knex) {
    return knex.schema.createTable('brands', (table) => {
            table.increments('id').primary();
            table.string('name').notNullable();
            table.string('logo').notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        });

};

export function down(knex) {
    return knex.schema.dropTableIfExists('brands');  
};
