const express = require("express");
const { CLOSING } = require("ws");
const dbOperations = require("../controller/dbOperations")
const router = express.Router();
module.exports = router;

router.post("/add", async (req, res) => {
    let details = req.body;
  //  console.log(details)
    
    try {
      let data = await dbOperations.addSponsorClub(details);
      if (data) return res.status(200).json({ msg: "Sponso CLub added" });
      res.status(400).json({ error: "FATAL ERROR: Sponsor Club not added" });
    } catch (e) {
      console.log(e.message);
    }
  });

  router.get("/sponsor clubs", async (req, res) => {
    console.log("hhhhh")
    try {
        
        let data = await dbOperations.getSponsorClubDetails();
      res.send(data);
    } catch (e) {
      res.send(e.message);
    }
  });


  module.exports = router;