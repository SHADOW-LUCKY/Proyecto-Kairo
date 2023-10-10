import { Router } from "express";
import { validateSchema } from "../middlewares/Validator.js";
import { UserSchema, loginUserSchema } from "../schemas/user.js";
import * as UsersControllers from "../controllers/users.controllers.js";

const ROUTER = Router();

export default ROUTER.get("/All", UsersControllers.GetAllUsers)
  .post("/New", validateSchema(UserSchema), UsersControllers.CreateNewUser)
  .put(
    "/Update/:Id",
    validateSchema(UserSchema),
    UsersControllers.UpdateOneUser
  )
  .delete("/Delete/:Id", UsersControllers.DeleteOneUser)
  .post("/Login", validateSchema(loginUserSchema), UsersControllers.Login)
  .get("/Logout", UsersControllers.Logout);
