import DBconnection from "../database/mongo.js";
import { ObjectId } from "mongodb";
import { encryptPassword, comparePasswords } from "../helpers/Hash.js";
import { createToken } from "../helpers/Token.js";

export const getUsers = async () => {
  try {
    const db = await DBconnection();
    const getAll = await db.collection("users").find().toArray();

    return getAll.length
      ? {
          msg: "Users found",
          data: getAll,
        }
      : {
          msg: "No Users",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Server Error: ${error.message}`);
  }
};

export const getOneUser = async (id) => {
  try {
    const db = await DBconnection();
    const user = await db
      .collection("users")
      .findOne({ _id: new ObjectId(id) });

    return user
      ? {
          msg: "Users found",
          data: user,
        }
      : {
          msg: "No Users",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Server Error: ${error.message}`);
  }
};

export const createUser = async (userData) => {
  try {
    const { user, password } = userData;

    const db = await DBconnection();
    const users = db.collection("users");

    const existingUser = await users.findOne({ userData });

    if (existingUser) {
      return {
        msg: "User already exists",
        status: 409,
      };
    }

    const hashedPassword = encryptPassword(password);
    userData.password = hashedPassword;

    const newUser = await users.insertOne(userData);
    return newUser.acknowledged
      ? {
          msg: "User Created Successfully",
          status: 201,
        }
      : {
          msg: "Missing data",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Server Error: ${error.message}`);
  }
};

export const updateUser = async (id, userData) => {
  try {
    const { password } = userData;
    const db = await DBconnection();

    const hashedPassword = encryptPassword(password);
    userData.password = hashedPassword;

    const updateOneUser = await db
      .collection("users")
      .updateOne({ _id: new ObjectId(id) }, { $set: userData });

    return updateOneUser.acknowledged
      ? {
          msg: `User with ID:${id} Successfully Updated`,
        }
      : {
          msg: "User Does Not Exist",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Server Error: ${error.message}`);
  }
};

export const deleteUser = async (id) => {
  try {
    const db = await DBconnection();
    const deleteOneUser = await db.collection("users").deleteOne({
      _id: new ObjectId(id),
    });
    return deleteOneUser.acknowledged
      ? {
          msg: `User with ID:${id} Removed Successfully`,
        }
      : {
          msg: "Missing data",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Server Error: ${error.message}`);
  }
};

export const loginUser = async (userData) => {
  try {
    const { user, password } = userData;
    const db = await DBconnection();
    const User = db.collection("users");

    const userFound = await User.findOne({ user });

    if (!userFound) {
      throw new Error(`User Not Found`);
    }

    const isPasswordValid = comparePasswords(password, userFound.password);

    if (!isPasswordValid) {
      throw new Error(`Wrong Password`);
    }

    const token = await createToken(userFound._id);
    return token
      ? {
          token,
          user: userFound,
        }
      : {
          msg: "Missing data",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Server Error: ${error.message}`);
  }
};
