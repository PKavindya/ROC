const mysql = require("mysql");
var config = require("../config/config");
const bcrypt=require("bcrypt");
const { join } = require("path");
const Joi = require("joi");
const { CLOSING } = require("ws");


// Connect to Database
let db = mysql.createConnection(config.databaseOptions);
db.connect((error) => {
  if (error) console.log(error.message);
  else {
    console.log("Connected to the Database...");
  }
});

function addMember(details) {
    return new Promise(async (resolve, reject) => {
    
        //console.log(MemberName);
  let sql = `INSERT INTO member(MemberName,MemberDoB,MemberNIC,MemberYearStudying)
      VALUES('${details[0].MemberName}','${details[0].MemberDoB}','${details[0].MemberNIC}',,'${details[0].MemberYearStudying}')`;
                
      db.query(sql, (error, results) => {
        if (error) {
          console.log(error.message);
          resolve(false);
        }
        resolve(true);

        reject(new Error("from addseller"));
      });
            });
  }

  function addCommittee(details) {
    return new Promise(async (resolve, reject) => {
    
        //console.log(MemberName);
  let sql = `INSERT INTO committee(CommitteeName)
      VALUES('${details[0].MemberName}')`;
                
      db.query(sql, (error, results) => {
        if (error) {
          console.log(error.message);
          resolve(false);
        }
        resolve(true);

        reject(new Error("from addseller"));
      });
            });
  }

  function addLecturer(details) {
    return new Promise(async (resolve, reject) => {
    
        //console.log(MemberName);
  let sql = `INSERT INTO lecturer(LecturerName,LecturerDept)
      VALUES('${details[0].LecturerName}','${details[0].LecturerDept}')`;
                
      db.query(sql, (error, results) => {
        if (error) {
          console.log(error.message);
          resolve(false);
        }
        resolve(true);

        reject(new Error("from addseller"));
      });
            });
  }

  function addProject(details) {
    return new Promise(async (resolve, reject) => {
    
        //console.log(MemberName);
  let sql = `INSERT INTO project(ProjectName, ProjectLocation, ProjectDescription)
      VALUES('${details[0].ProjectName}','${details[0].ProjectLocation}','${details[0].ProjectDescription}')`;
                
      db.query(sql, (error, results) => {
        if (error) {
          console.log(error.message);
          resolve(false);
        }
        resolve(true);

        reject(new Error("from addseller"));
      });
            });
  }

  function addSponsorClub(details) {
    return new Promise(async (resolve, reject) => {
    
        //console.log(MemberName);
  let sql = `INSERT INTO sponsorclub(SponsorCLubName, SponsorClubLocation, Description)
      VALUES('${details[0].SponsorCLubName}','${details[0].SponsorClubLocation}','${details[0].Description}')`;
                
      db.query(sql, (error, results) => {
        if (error) {
          console.log(error.message);
          resolve(false);
        }
        resolve(true);

        reject(new Error("from addseller"));
      });
            });
  }
  
  
  function getMemberDetails() {
    console.log("hhhhhhhhhhhhhh")
    return new Promise((resolve, reject) => {
      sql = `SELECT member.MemberName, member.MemberDoB, member.MemberNIC, member.MemberYearStudying
      FROM member
       `;
      db.query(sql, (error, result) => {
        if (error) console.log(error.message);
       
        resolve(result);
        reject(new Error("from ComplaintInfo"));
      });
    });
  }

  function getCommitteeDetails() {
    console.log("hhhhhhhhhhhhhh")
    return new Promise((resolve, reject) => {
      sql = `SELECT committee.CommitteeName
      FROM committee
       `;
      db.query(sql, (error, result) => {
        if (error) console.log(error.message);
       
        resolve(result);
        reject(new Error("from ComplaintInfo"));
      });
    });
  }

  function getLecturerDetails() {
    console.log("hhhhhhhhhhhhhh")
    return new Promise((resolve, reject) => {
      sql = `SELECT lecturer.LecturerName, lecturer.LecturerDept
      FROM lecturer
       `;
      db.query(sql, (error, result) => {
        if (error) console.log(error.message);
       
        resolve(result);
        reject(new Error("from ComplaintInfo"));
      });
    });
  }

  function getProjectDetails() {
    console.log("hhhhhhhhhhhhhh")
    return new Promise((resolve, reject) => {
      sql = `SELECT * FROM project
       `;
      db.query(sql, (error, result) => {
        if (error) console.log(error.message);
       
        resolve(result);
        reject(new Error("from ComplaintInfo"));
      });
    });
  }

  function getSponsorClubDetails() {
    console.log("hhhhhhhhhhhhhh")
    return new Promise((resolve, reject) => {
      sql = `SELECT sponsorclub.SponsorCLubName, sponsorclub.SponsorClubLocation, SponsorClub.Description
      FROM sponsorclub
       `;
      db.query(sql, (error, result) => {
        if (error) console.log(error.message);
       
        resolve(result);
        reject(new Error("from ComplaintInfo"));
      });
    });
  }

  //DELETE
  function removeMember(details) {
    return new Promise(async (resolve, reject) => {
      let { MemberID } = details;
  let sql = `UPDATE member SET available = 0 where id = '${MemberID}' AND available = 1`;//methana UPDATE eken eha paththe ena eka balanda oneh
                
      db.query(sql, (error, results) => {
        if (error) {
          console.log(error.message);
          resolve(false);
        }
        resolve(true);
        reject(new Error("from addMember"));
      });
    });
  }

  function removeCommittee(details) {
    return new Promise(async (resolve, reject) => {
      let { CommitteeID } = details;
  let sql = `UPDATE committee SET available = 0 where id = '${CommitteeID}' AND available = 1`;
                
      db.query(sql, (error, results) => {
        if (error) {
          console.log(error.message);
          resolve(false);
        }
        resolve(true);
        reject(new Error("from addCommittee"));
      });
    });
  }

  function removeProject(details) {
    return new Promise(async (resolve, reject) => {
      let { ProjectID } = details;
  let sql = `UPDATE project SET available = 0 where id = '${ProjectID}' AND available = 1`;
                
      db.query(sql, (error, results) => {
        if (error) {
          console.log(error.message);
          resolve(false);
        }
        resolve(true);
        reject(new Error("from addProject"));
      });
    });
  }

  function removeSponsorClub(details) {
    return new Promise(async (resolve, reject) => {
      let { SponsorCLubID } = details;
  let sql = `UPDATE sponsorclub SET available = 0 where id = '${SponsorCLubID}' AND available = 1`;
                
      db.query(sql, (error, results) => {
        if (error) {
          console.log(error.message);
          resolve(false);
        }
        resolve(true);
        reject(new Error("from addSponsorClub"));
      });
    });
  }

  function removeLecturer(details) {
    return new Promise(async (resolve, reject) => {
      let { LecturerID } = details;
  let sql = `UPDATE lecturer SET available = 0 where id = '${LecturerID}' AND available = 1`;
                
      db.query(sql, (error, results) => {
        if (error) {
          console.log(error.message);
          resolve(false);
        }
        resolve(true);
        reject(new Error("from addLectuer"));
      });
    });
  }

  //opeations for joined tables
  //meka balanda oneh

  function MemberProject(MemberID, ProjectID) {
    return new Promise((resolve, reject) => {
      // console.log(id);
      sql = 
      /*`SELECT  food_item.name, orders.quantity, orders.total, orders.status, orders.id
      FROM orders
      INNER JOIN food_item
      ON orders.food_id = food_item.id
      INNER JOIN seller
      ON food_item.seller_id = seller.id 
       where seller.id = '${id}' ORDER BY id DESC`;*/

       `SELECT MemberID, MemberName, MemberDoB, MemberNIC, MemberYearStudying
      FROM member
      INNER JOIN poject
      ON member.MemberID = project.ProjectID
      where seller.id = '${id}' ORDER BY id DESC`;
      db.query(sql, (error, result) => {
        if (error) console.log(error.message);
       resolve(result);
      //  console.log(result);
        reject(new Error("from ordersInfo"));
      });
    });
  }
  
  module.exports = {
    getMemberDetails:getMemberDetails,
    getCommitteeDetails:getCommitteeDetails,
    getLecturerDetails:getLecturerDetails,
    getProjectDetails:getProjectDetails,
    getSponsorClubDetails:getSponsorClubDetails,

    addCommittee:addCommittee,
    addProject:addProject,
    addLecturer:addLecturer,
    addSponsorClub:addSponsorClub,

    removeMember:removeMember,
    removeCommittee:removeCommittee,
    removeProject:removeProject,
    removeSponsorClub:removeSponsorClub,
    removeLecturer:removeLecturer
  };