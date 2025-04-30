
export function up(knex) {
    return knex.schema.createTable('products', (table) => {
        table.increments('id').primary();
        table.string('sku').notNullable();
        table.string('color').notNullable();
        table.text('sizes').notNullable();     
        table.text('pictures').notNullable();  
        table.integer('brand_id').unsigned().references('id').inTable('brands').onDelete('SET NULL');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  
};

export function down(knex) {
    return knex.schema.dropTableIfExists('products');
  
};
