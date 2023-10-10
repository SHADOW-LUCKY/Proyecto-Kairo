import { SignJWT, jwtVerify } from "jose";
import { PRIVATE } from "../config/config.js";

const encoder = new TextEncoder();

export const createToken = async (id) => {
  try {
    const jwtConstructor = new SignJWT({
      id,
    });

    const token = await jwtConstructor
      .setProtectedHeader({
        alg: "HS256",
        typ: "JWT",
      })
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(encoder.encode(PRIVATE.KEY));

    return token;
  } catch (error) {
    throw new Error(`Error al generar el token ${error.message}`);
  }
};

export const verifyJWT = async (token) => {
  try {
    const { payload } = await jwtVerify(token, encoder.encode(PRIVATE.KEY));
    return payload;
  } catch (error) {
    throw new Error(`Token invalido ${error.message}`);
  }
};
