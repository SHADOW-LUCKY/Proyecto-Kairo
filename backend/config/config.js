import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";

export const ENVPORT = {
  PORT: process.env.PORT456,
};

export const MONGODB = {
  URL: process.env.MANGOS_URL,
};

export const Global = (app) => {
  app.use(morgan("dev"));
  app.use(cors());
  app.use(express.json());
};
