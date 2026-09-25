// server.js
// Simple Express server that serves the static home page.
// The AI feature now runs entirely in the browser via Puter.js
// (see public/index.html) — no server-side API key needed.

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

// Health check (useful for Render)
app.get("/healthz", (req, res) => res.status(200).send("ok"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
