const bcrypt = require("bcrypt");
///
function formatLoginDetails(info) {
  return { phone: info.phone, password: info.password };
}

///
function formatRegisterDetails(info) {
  return {
    username: username,
    phone: info.phone,
    password: info.password,
    status: null,
    isAdmin: null,
    profile: null,
  };
}

///f
function formatUserDetails(info) {
  return {
    id: info._id,
    username: username,
    phone: info.phone,
    status: null,
    isAdmin: null,
    profile: null,
  };
}
////
function hashPassword(password) {
  return new Promise(function (resolve, reject) {
    try {
      bcrypt.hash(password, 10, function (error, hash) {
        if (error) reject(error);
        resolve(hash);
      });
    } catch (error) {
      reject(error);
    }
  });
}

///
function verifyPassword(password, hpassword) {
  return new Promise(function (resolve, reject) {
    try {
      bcrypt.compare(password, hpassword, function (error, match) {
        if (error) reject(error);
        resolve(match);
      });
    } catch (error) {
      reject(error);
    }
  });
}
///
module.exports = {
  formatRegisterDetails,
  formatLoginDetails,
  formatUserDetails,
  hashPassword,
  verifyPassword,
};
