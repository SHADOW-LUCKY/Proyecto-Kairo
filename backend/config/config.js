import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

export const ENVPORT = {
  PORT: process.env.PORT456,
};

export const MONGODB = {
  URL: process.env.MANGOS_URL,
};

export const PRIVATE = {
  KEY: process.env.PK,
};

export const Global = (app) => {
  app.use(morgan("dev"));
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(cookieParser());
};
