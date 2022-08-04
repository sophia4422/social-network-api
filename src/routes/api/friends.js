const { Router } = require("express");
const router = Router();
const { Thought, User } = require("../../models");

//POST /friends/:friendId
router.post("/friends/:friendId", async (req, res) => {});

//DEL /friends/:friendId
router.delete("/friends/:friendId", async (req, res) => {});

module.exports = router;
