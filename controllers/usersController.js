import { title } from "process";

export const getUsers = (req, res) => {
  console.log("usernames will be logged here - wip");
  res.send("Hello world!!!");
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
