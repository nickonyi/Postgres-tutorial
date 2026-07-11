import { Router } from "express";
import {
  getUsers,
  usersCreateGet,
  usersCreatePost,
} from "../controllers/usersController.js";

const usersRoute = Router();

usersRoute.get("/", getUsers);
usersRoute.get("/new", usersCreateGet);
usersRoute.post("/new", usersCreatePost);

export default usersRoute;
