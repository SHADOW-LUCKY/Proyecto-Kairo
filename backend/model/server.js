import express from "express";
import { ENVPORT, Global } from "../config/config.js";
import ROUTES from "../routes/Routes.js";
import swaggerDocs from "../documentation/swagger.js";

export default class {
  constructor() {
    this.app = express();
    this.port = ENVPORT.PORT;
    this.midlewares = Global(this.app);
    this.routes();
  }

  async routes() {
    this.app.use("/api", ROUTES);
  }

  startServer() {
    this.app.listen(this.port, () => {
      console.clear();
      console.log(`Server Runing in http://localhost:${this.port}`);
      swaggerDocs(this.app, this.port);
    });
  }
}
