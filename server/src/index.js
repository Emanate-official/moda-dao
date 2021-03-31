require("dotenv").config();
const express = require("express");
const profiles = require("./endpoint/profile");
const stats = require("./endpoint/stats");

const authentication = require("./endpoint/authentication");
const authenticationCheck = require("./endpoint/authentication/check");
const secureRoute = require("./middleware/secureRoute");

const cors = require("cors");
// const setupDatabase = require("./database/setup");

const app = express();

const initialiseTasks = async () => {
  // Run database setup modules.
  // await setupDatabase();
};

const initialiseServer = async () => {
  // Configure CORS.
  app.use(cors());

  // Request parsing.
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Register endpoints.
  // app.use("/api", authentication);
  // app.use("/api", secureRoute, authenticationCheck);
  app.use("/api", profiles);
  app.use("/api", stats);

  app.listen(process.env.PORT);
  console.log(`Server listening on localhost:${process.env.PORT}`);
};

const initialise = async () => {
  await initialiseTasks();
  await initialiseServer();
};

initialise();