const cors = require("cors");
const express = require('express');
const passport = require('passport');
const bodyParser = require("body-parser");
const morgan = require('morgan');
const passportCfg = require("./passport");

module.exports = function (app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/uploads", express.static("uploads"));
  app.use(cors());
  app.use(passport.initialize());
  passportCfg(passport);
  app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

};