import pool from "./pool.js";

export const getAllUsernames = async () => {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
};

export const insertUsernames = async (username) => {
  await pool.query("INSERT into usernames(username) VALUES ($1)", [username]);
};

export const searchNames = async (username) => {
  const query = `SELECT * FROM usernames WHERE username ILIKE $1`;
  const values = [`%${username}%`];

  const { rows } = await pool.query(query, values);
  return rows;
};

export const deleteUsersFromDb = async () => {
  const query = `DELETE FROM usernames`;
  await pool.query(query);
};
