const { NotFoundError } = require('../utils/errors');
const { User } = require('../db');
module.exports = async (req, res, next) => {
  try {

    const user = await User.findOne({
      login: req.body.login,
    });
    if (user) {
      req.user = user;
      return next();
    }
    next(new NotFoundError());
  } catch (e) {
    next(e);
  }
};