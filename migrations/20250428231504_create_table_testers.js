
export function up(knex) {
    return knex.schema.createTable('testers', (table) => {
            table.increments('id').primary();
            table.string('name').notNullable();
            table.string('email').notNullable();
            table.string('password').notNullable();
            table.date('birthday').notNullable();
            table.enum('sex', ['Male', 'Female']).notNullable();
            table.integer('tests_done').unsigned().defaultTo(0);
            table.integer('measure_id').unsigned().references('id').inTable('measures').onDelete('SET NULL');
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        });
  
};

export function down(knex) {
    return knex.schema.dropTableIfExists('testers');
};
