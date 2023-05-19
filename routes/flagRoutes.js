const router = require("express").Router()
const {Flag} = require("../models")

router.get("/", async(req,res) => {
  try {
    const flags = await Flag.find()
    res.status(200).json(flags)
  } catch (error) {
    console.log(error)
    res.status(500).json({msg: error})
  }
})

// req.body: {country: string, colors: [{name: string}]}
router.post("/", async(req,res) => {
  try {
    const newflag = await Flag.create(req.body)
    res.status(200).json(newflag)
  } catch (error) {
    console.log(error)
    res.status(500).json({msg: error})
  }
})

router.get("/:color1/:color2", async(req,res) => {
  try {
    const flags = await Flag.find({
      // "colors.name": {$and: [{$in: [req.params.color2]}, {$in: [req.params.color1]} ]}
      $and: [{"colors.name": {$in: [req.params.color2]}}, {"colors.name": {$in: [req.params.color1]}}]
    })
    res.status(200).json(flags)
  } catch (error) {
    console.log(error)
    res.status(500).json({msg: error})
  }
})

module.exports  = router