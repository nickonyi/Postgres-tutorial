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

export const usersCreatePost = (req, res) => {
  console.log("username to be saved:", req.body.username);
  res.redirect("/new");
};
