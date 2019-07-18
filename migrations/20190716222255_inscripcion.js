exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('inscripcion', function(t) {
            t.increments('id').primary();
            t.integer('idAsistente').references('id').inTable('asistentes');
            t.integer('idPonente').references('id').inTable('ponentes');
            t.integer('idCongreso').references('id').inTable('congreso');
        })

    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('inscripcion'),
    ]);

};