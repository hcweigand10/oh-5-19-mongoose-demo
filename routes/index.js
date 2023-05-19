const router = require("express").Router()
const flagRoutes = require("./flagRoutes")
const colorRoutes = require("./colorRoutes")

router.use("/api/flags", flagRoutes)
router.use("/api/colors", colorRoutes)

module.exports = router
