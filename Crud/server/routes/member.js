const express = require("express");
const { CLOSING } = require("ws");
const dbOperations = require("../controller/dbOperations")
const router = express.Router();
module.exports = router;

router.post("/add", async (req, res) => {
    let details = req.body;
  //  console.log(details)
    
    try {
      let data = await dbOperations.addMember(details);
      if (data) return res.status(200).json({ msg: "seller added" });
      res.status(400).json({ error: "FATAL ERROR: complaint not added" });
    } catch (e) {
      console.log(e.message);
    }
  });

  router.get("/members", async (req, res) => {
    console.log("hhhhh")

    try {
        
        let data = await dbOperations.getMemberDetails();
      res.send(data);
    } catch (e) {
      res.send(e.message);
    }
  });


  module.exports = router;