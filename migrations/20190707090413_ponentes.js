exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('ponentes', function(t) {
            t.increments('id').primary();
            t.string('nombres').notNullable();
            t.string('apellidos').notNullable();
            t.string('categoria').notNullable();
            t.string('tema').notNullable().unique();
            t.string('email').notNullable().unique();
            t.string('resumen').notNullable().unique();
            t.string('institucion').notNullable().unique();
        })
    ]);

};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('ponentes'),
    ]);

};