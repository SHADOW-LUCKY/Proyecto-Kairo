import * as UsersServices from "../services/users.services.js";
import {
  sendSuccessResponse,
  sendErrorResponse,
} from "../helpers/SendResponse.js";

const getRequestBody = (req) => {
  const { completeName, rol, img_profile, user, password } = req.body;
  return {
    completeName,
    rol,
    img_profile,
    user,
    password,
  };
};

const getRequestId = (req) => req.params.Id;

export const GetAllUsers = async (req, res) => {
  try {
    const allUsers = await UsersServices.getUsers();
    sendSuccessResponse(res, allUsers);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const CreateNewUser = async (req, res) => {
  try {
    const UserData = getRequestBody(req);
    const userNew = await UsersServices.createUser(UserData);
    sendSuccessResponse(res, userNew);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const UpdateOneUser = async (req, res) => {
  try {
    const Id = getRequestId(req);
    const UserData = getRequestBody(req);
    const updateUser = await UsersServices.updateUser(Id, UserData);
    sendSuccessResponse(res, updateUser);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const DeleteOneUser = async (req, res) => {
  try {
    const Id = getRequestId(req);
    const allUsers = await UsersServices.deleteUser(Id);
    res.cookie("token", "", {
      expires: new Date(0),
    });
    sendSuccessResponse(res, allUsers);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const Login = async (req, res) => {
  try {
    const UserData = getRequestBody(req);
    const login = await UsersServices.loginUser(UserData);
    res.cookie("token", login);
    sendSuccessResponse(res, "Successful login");
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const Logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  sendSuccessResponse(res, "Successful logout");
};
