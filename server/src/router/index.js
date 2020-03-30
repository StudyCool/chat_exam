const router = require('express').Router();
const { saveProfilePicture } = require('./../middleware/multer.js');
const userController = require('../controllers/user.controller.js');
const findUserByLogin = require('./../middleware/findUserByLogin.js');
const comparePassword = require('./../middleware/comparePassword.js');
const {getChat} = require('../controllers/chat.controller.js');
const {findChatById} = require('../middleware/findChatById.js');
const {joinToChat} = require('../controllers/chat.controller.js');
const {createChat} = require('../controllers/chat.controller.js');

router.post('/sign_up',
    saveProfilePicture,
    (req, res, next) => {

      req.body.profilePicture = req.file.filename;
      next();
    },
    userController.createUser);
router.post('/login',
    findUserByLogin,
    comparePassword,
    (req, res) => res.send(req.user),
);
router.route('/chat(/:chatId)?').
get(getChat).
post(createChat);

router.route('/chat/:chatId/participants').post(
    findChatById,
    joinToChat);

router.route('/chat/:chatId/message(/:messageId)').post();

module.exports = router;