exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('login', function(t) {
            t.increments('id').primary();
            t.string('usuario');
            t.string('password');
        })

    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('login')
    ]);
};