import express from "express";

//create instance
const router = express.Router();

router.get("/all", (req, res) => {
  res.send("All Students...");
});

router.post("/create", (req, res) => {
  res.send("New Student created");
});

router.put("/update", (req, res) => {
  res.send("Student updated");
});

router.delete("/delete", (req, res) => {
  res.send("Student Deleted");
});

export default router;
