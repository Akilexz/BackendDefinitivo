exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('gestion', function(t) {
            t.increments('id').primary();
            t.text('tituloCongreso');
            t.text('direccionCorreo');
            t.text('paginaWeb');
            t.text('informacion');
            t.text('tituloCronograma');
            t.text('telefono');
            t.text('correoUno');
            t.text('correoDos');
        })

    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('gestion')
    ]);
};