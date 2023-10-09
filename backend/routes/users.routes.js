import { Router } from "express";
import * as UsersControllers from "../controllers/users.controllers.js";

const ROUTER = Router();

export default ROUTER.get("/All", UsersControllers.GetAllUsers)
  .post("/New", UsersControllers.CreateNewUser)
  .put("/Update/:Id", UsersControllers.UpdateOneUser)
  .delete("/Delete/:Id", UsersControllers.DeleteOneUser)
  .post("/Login", UsersControllers.Login)
  .get("/Logout", UsersControllers.Logout);
