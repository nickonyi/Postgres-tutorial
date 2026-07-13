import {
  getAllUsernames,
  insertUsernames,
  searchNames,
  deleteUsersFromDb,
} from "../db/queries.js";

export const getUsernames = async (req, res) => {
  const usernames = await getAllUsernames();
  console.log("Usernames:", usernames);
  res.render("index", {
    title: "Username page",
    users: usernames,
  });
};

export const usersCreateGet = (req, res) => {
  res.render("createUser", {
    title: "New users",
  });
};

export const createUsernamePost = async (req, res) => {
  const { username } = req.body;
  await insertUsernames(username);
  res.redirect("/");
};

export const searchUsernamesGet = async (req, res) => {
  const { username } = req.query;
  const users = await searchNames(username);

  res.render("index", {
    title: "searched names",
    users,
  });
};

export const deleteAllUsers = async (req, res) => {
  await deleteUsersFromDb();
  res.redirect("/");
};
