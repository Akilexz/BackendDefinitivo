exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('ponentes', function(t) {
            t.increments('id').primary();
            t.string('numIdentificacion').notNullable().unique();
            t.string('nombres').notNullable();
            t.string('apellidos').notNullable();
            t.string('telefono').notNullable().unique();
            t.string('email').notNullable().unique();
        })
    ]);

};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('ponentes'),
    ]);

};