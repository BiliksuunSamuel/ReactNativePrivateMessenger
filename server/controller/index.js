const services = require("../services");
const utils = require("../utils");
////
async function initLogin(req, res) {
  try {
    console.log(req.body);
  } catch (error) {
    res.status(404).send(error.message);
  }
}

async function initRegister(req, res) {
  try {
    console.log(req.body);
  } catch (error) {
    res.status(404).send(error.message);
  }
}

///
module.exports = { initLogin, initRegister };
