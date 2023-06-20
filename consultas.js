const express = require('express')
const pool = require('./conexiones')


//Consulta de usuarios
const users = async () => {
    try {
        const result = await pool.query("SELECT * FROM users");
        console.log(result.rows);
        return result.rows;
    } catch (error) {
        console.log(error);
    }
};


//Registrar usuarios
const user = async (name, email, age) => {
  const consulta = "INSERT INTO users VALUES(DEFAULT, $1, $2, $3)";
  const values = [name, email, age];
  const result = await pool.query(consulta, values);
  console.log("user inserted");
};

//Editar usuarios
const editUser = async (name, email, age, id) => {
  try {
    const consulta =
      "UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4";
    const values = [name, email, age, id];
    const result = await pool.query(consulta, values);
  } catch (e) {
    console.log(e)
  }
};

//Eliminar usuarios
const deleteUser = async (id) => {
  const consulta = "DELETE FROM users where id = $1 ";
  const values = [id];
  const result = await pool.query(consulta, values);
};

module.exports = {
    users,
    user,
    editUser,
    deleteUser
}