
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (col) => {
        col.increments();
        col.string('username').notNullable();
        col.string('password').notNullable();
        col.string('department')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users')
};
