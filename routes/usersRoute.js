import { Router } from "express";
import { getUsers } from "../controllers/usersController.js";

const usersRoute = Router();

usersRoute.get("/", getUsers);

export default usersRoute;
