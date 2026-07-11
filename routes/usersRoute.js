import { Router } from "express";
import {
  getUsernames,
  usersCreateGet,
  usersCreatePost,
} from "../controllers/usersController.js";

const usersRoute = Router();

usersRoute.get("/", getUsernames);
usersRoute.get("/new", usersCreateGet);
usersRoute.post("/new", usersCreatePost);

export default usersRoute;
