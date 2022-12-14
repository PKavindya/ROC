const express = require("express");
const { CLOSING } = require("ws");
const dbOperations = require("../controller/dbOperations")
const router = express.Router();
module.exports = router;

router.post("/add", async (req, res) => {
    let details = req.body;
  //  console.log(details)
    
    try {
      let data = await dbOperations.addCommittee(details);
      if (data) return res.status(200).json({ msg: "committee added" });
      res.status(400).json({ error: "FATAL ERROR: committee not added" });
    } catch (e) {
      console.log(e.message);
    }
  });

  router.get("/committees", async (req, res) => {
    console.log("hhhhh")
    try {
        
        let data = await dbOperations.getCommitteeDetails();
      res.send(data);
    } catch (e) {
      res.send(e.message);
    }
  });


  module.exports = router;