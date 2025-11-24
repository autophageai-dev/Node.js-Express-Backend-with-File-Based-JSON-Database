const express = require("express");
const router = express.Router();
const db = require("../db/fileDb");

router.get("/",(req,res)=> res.json(db.read("notes.json")));

router.post("/",(req,res)=>{
  const {text,userId}=req.body;
  if(!text) return res.status(400).json({error:"Note text required"});
  if(!userId) return res.status(400).json({error:"userId required"});
  const notes=db.read("notes.json");
  const newNote={id:Date.now(),text,userId};
  notes.push(newNote);
  db.write("notes.json",notes);
  res.json(newNote);
});

module.exports=router;
