const { Router } = require("express");
const router = Router();
const { Thought, User } = require("../../models");

//GET /
router.get("/", async (req, res) => {});

//GET /:id
router.get("/:id", async (req, res) => {});

//POST /
router.post("/", async (req, res) => {});

//PUT /:id
router.put("/:id", async (req, res) => {});

//DEL /:id
router.delete("/:id", async (req, res) => {});

//USE /:userID

module.exports = router;
