exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('cronograma', function(t) {
            t.increments('id').primary();
            t.string('temaPonencia').notNullable();
            t.date('fecha').notNullable();
            t.time('hora').notNullable();
            t.string('autor').notNullable();
            t.integer('idCongreso').references('id').inTable('congreso');
        })

    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('cronograma'),
    ]);

};