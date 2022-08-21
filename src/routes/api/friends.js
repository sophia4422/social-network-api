const { Router } = require("express");
const router = Router();
const {
  createFriendFromUser,
  removeFriendFromUser,
} = require("../../controllers/api/friends");

//POST /friends/:friendId
router.post("/friends", createFriendFromUser);

//DEL /friends/:friendId
router.delete("/friends/:friendId", removeFriendFromUser);

module.exports = router;
