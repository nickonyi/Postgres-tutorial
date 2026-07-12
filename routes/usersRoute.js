import { Router } from "express";
import {
  getUsernames,
  usersCreateGet,
  createUsernamePost,
  searchUsernamesGet,
} from "../controllers/usersController.js";

const usersRoute = Router();

usersRoute.get("/", getUsernames);
usersRoute.get("/new", usersCreateGet);
usersRoute.get("/search", searchUsernamesGet);
usersRoute.post("/new", createUsernamePost);

export default usersRoute;
