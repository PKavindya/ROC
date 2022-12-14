const express = require("express");
const { CLOSING } = require("ws");
const dbOperations = require("../controller/dbOperations")
const router = express.Router();
module.exports = router;

router.post("/add", async (req, res) => {
    let details = req.body;
  //  console.log(details)
    
    try {
      let data = await dbOperations.addLecturer(details);
      if (data) return res.status(200).json({ msg: "Lecturer added" });
      res.status(400).json({ error: "FATAL ERROR: lecturer not added" });
    } catch (e) {
      console.log(e.message);
    }
  });

  router.get("/lecturers", async (req, res) => {
    console.log("hhhhh")
    try {
        
        let data = await dbOperations.getLecturerDetails();
      res.send(data);
    } catch (e) {
      res.send(e.message);
    }
  });


  module.exports = router;