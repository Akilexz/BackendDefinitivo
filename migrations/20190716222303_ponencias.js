exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('ponencias', function(t) {
            t.increments('id').primary();
            t.string('tema').notNullable();
            t.integer('idPonente').references('id').inTable('ponentes');
            t.integer('idCongreso').references('id').inTable('congreso');
            t.integer('idAsistente').references('id').inTable('asistentes');
        })

    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('ponencias'),
    ]);

};