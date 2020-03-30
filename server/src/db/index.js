const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fc_test', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = require('../models/User.js');
const Chat = require('../models/Chat.js');

// экземпляр нашего подключения



module.exports = {
  User,
  Chat,
};

