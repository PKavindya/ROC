const express = require("express");
const { CLOSING } = require("ws");
const dbOperations = require("../controller/dbOperations")
const router = express.Router();
module.exports = router;

router.post("/add", async (req, res) => {
    let details = req.body;
  //  console.log(details)
    
    try {
      let data = await dbOperations.addProject(details);
      if (data) return res.status(200).json({ msg: "project added" });
      res.status(400).json({ error: "FATAL ERROR: project not added" });
    } catch (e) {
      console.log(e.message);
    }
  });

  router.get("/projects", async (req, res) => {
    console.log("hhhhh")
    try {
        
        let data = await dbOperations.getProjectDetails();
      res.send(data);
    } catch (e) {
      res.send(e.message);
    }
  });


  module.exports = router;