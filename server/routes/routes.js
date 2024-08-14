const express = require("express");
const routes = express.Router();

const serviceFile = require("../services/services");
const controllerFile = require("../controller/controller");

routes.get("/", serviceFile.signUp);
routes.get("/user-credentials", serviceFile.displayUsers);
routes.post("/api/signup/", controllerFile.createUser);
routes.get("/api/signup/", controllerFile.fetchUser);

module.exports = routes;
