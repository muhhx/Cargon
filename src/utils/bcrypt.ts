const bcrypt = require("bcrypt");

module.exports = (password: string) => {
  return bcrypt.hash(password, 10);
};
