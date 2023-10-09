import swaggerUI from "swagger-ui-express";
import swaggerDocument from "./version(1.0.0).json" assert { type: "json" };

const API_DOCS_ROUTE = "/api-docs";

export default (app, port) => {
  try {
    app.use(API_DOCS_ROUTE, swaggerUI.serve, swaggerUI.setup(swaggerDocument));
    app.get(`${API_DOCS_ROUTE}.json`, (req, res) => {
      res.setHeader("Content-Type", "application/json");
      res.send(swaggerDocument);
    });
  } catch (error) {
    console.log("Error al servir la Documentacion", error);
  }
  console.log(
    `Version 1.0.1 running available at http://localhost:${port}${API_DOCS_ROUTE}`
  );
};
