const express = require("express");
const router = express.Router();
const db = require("../db/fileDb");

router.get("/",(req,res)=> res.json(db.read("users.json")));

router.post("/",(req,res)=>{
  const {username}=req.body;
  if(!username) return res.status(400).json({error:"Username required"});
  const users=db.read("users.json");
  const newUser={id:Date.now(),username};
  users.push(newUser);
  db.write("users.json",users);
  res.json(newUser);
});

module.exports=router;
