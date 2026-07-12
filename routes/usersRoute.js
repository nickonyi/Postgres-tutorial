import { Router } from "express";
import {
  getUsernames,
  usersCreateGet,
  createUsernamePost,
} from "../controllers/usersController.js";

const usersRoute = Router();

usersRoute.get("/", getUsernames);
usersRoute.get("/new", usersCreateGet);
usersRoute.post("/new", createUsernamePost);

export default usersRoute;
