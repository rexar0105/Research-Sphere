import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).json({ error: "Query is required" });

    const response = await axios.get(`https://api.semanticscholar.org/graph/v1/paper/search`, {
      params: { query, limit: 10, fields: "title,authors,year,url" }
    });

    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Search failed" });
  }
});

export default router;