exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('imagenesprueba', function(t) {
            t.increments('id').primary();
            t.text('nombre');
        })

    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('imagenesprueba')
    ]);
};