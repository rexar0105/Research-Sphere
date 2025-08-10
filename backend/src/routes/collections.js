import express from "express";
import jwt from "jsonwebtoken";
import Collection from "../models/Collection.js";

const router = express.Router();

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
};

router.post("/", authMiddleware, async (req, res) => {
  const { name, papers } = req.body;
  const collection = await Collection.create({ userId: req.userId, name, papers });
  res.json(collection);
});

router.get("/", authMiddleware, async (req, res) => {
  const collections = await Collection.find({ userId: req.userId });
  res.json(collections);
});

export default router;