const db = require('./../db');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userRef = {
  type: Schema.Types.ObjectId,
  ref: 'User',
};

const messageSchema = new Schema({
  authorId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  body: {
    type: Schema.Types.String,
    default: '',
  },
  files: [Schema.Types.String],
  createdAt: Schema.Types.Date,
  updatedAt: Schema.Types.Date,
}, {
  timestamp: true,
});

const chatSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
    match: /^\w{6,16}$/,
  },
  owner: {
    ...userRef,
    required: true,
  },
  users: [
    userRef,
  ],
  messages: [messageSchema],
  createdAt: Schema.Types.Date,
  updatedAt: Schema.Types.Date,
}, {
  timestamp: true,
});

const Chat = mongoose.connection.model('Chat', chatSchema);
module.exports = Chat;
