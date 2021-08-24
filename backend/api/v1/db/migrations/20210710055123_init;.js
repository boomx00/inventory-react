
exports.up = function(knex) {
  return knex.schema
    .createTable('users',(table)=>{
        table.increments('id');
        table.string('username').notNullable().unique();
        table.string('password').notNullable();
        table.timestamps(true,true);
    })
    .createTable('user_profiles',(table)=>{
        table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
        table.string('first_name');
        table.string('last_name');
        table.string('phone_number');
    })
    
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('users')
    .dropTable('user_profiles')
};
