import express from "express";
import { aboutController } from "../controllers/aboutController.js";
import { homeController } from "../controllers/homeController.js";

const route = express.Router();

route.get("/", homeController);
route.get("/about", aboutController);

export default route;
