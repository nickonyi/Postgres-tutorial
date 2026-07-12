import { getAllUsernames, insertUsernames } from "../db/queries.js";

export const getUsernames = async (req, res) => {
  const usernames = await getAllUsernames();
  console.log("Usernames:", usernames);
  res.send("Usernames:" + usernames.map((user) => user.username).join(", "));
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
