const router = require("express").Router();
const friendsRoutes = require("./friends");
const thoughtsRoutes = require("./thoughts");
const reactionsRoutes = require("./reactions");

router.use("/friends", friendsRoutes);
router.use("/thoughts", thoughtsRoutes);
router.use("/reactions", reactionsRoutes);

module.exports = router;
