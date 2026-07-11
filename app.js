import express from "express";
import dotenv from "dotenv";
import url from "url";
import path from "path";
import usersRoute from "./routes/usersRoute.js";

dotenv.config();

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/", usersRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
