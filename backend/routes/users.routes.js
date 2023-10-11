import { Router } from "express";
import { validateSchema } from "../middlewares/Validator.js";
import { UserSchema, loginUserSchema } from "../schemas/user.js";
import { authRequired } from "../middlewares/ValidateToken.js";
import * as UsersControllers from "../controllers/users.controllers.js";

const ROUTER = Router();

export default ROUTER.get("/All", authRequired, UsersControllers.GetAllUsers)
  .get("/:Id", authRequired, UsersControllers.GetOneUser)
  .post("/New", validateSchema(UserSchema), UsersControllers.CreateNewUser)
  .put(
    "/Update/:Id",
    authRequired,
    validateSchema(UserSchema),
    UsersControllers.UpdateOneUser
  )
  .delete("/Delete/:Id", authRequired, UsersControllers.DeleteOneUser)
  .post("/Login", validateSchema(loginUserSchema), UsersControllers.Login)
  .get("/Logout", UsersControllers.Logout);
