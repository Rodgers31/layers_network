const db = require('../data/db-config');

module.exports = {
  findAll,
  findBy,
  findById,
  add,
  update,
  remove,
  insertUser,
  getAllUsers,
};

async function insertUser(user) {
  const [newUserObject] = await db('users').insert(user, [
    'user_name',
    'name',
    'email',
    'password',
    'admin',
  ]);
  return newUserObject;
}

function getAllUsers(filter) {
  return db('users')
    .select('id', 'user_name', 'name', 'email', 'password', 'admin')
    .where(filter);
}

function findAll() {
  return db('users');
}

function findBy(filter) {
  return db('users').where(filter);
}

function findById(id) {
  return db('users').select('id', 'user_name').where('id', id).first();
}

async function add(user) {
  const [id] = await db('users').insert(user);
  return findById(id);
}

async function update(id, newInfo) {
  return db('users').where('id', id).update(newInfo);
}

async function remove(id) {
  const removed = await db('users').where('id', id).first();
  await db('users').del().where('id', id);
  return removed;
}
