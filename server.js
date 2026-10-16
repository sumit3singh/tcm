// server.js → Lightweight Zero-Dependency Production Static Server for Railway / Containers / Node
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const BUILD_DIR = path.join(__dirname, "build");

const MIME_TYPES = {
  ".html": "text/html; charset=UTF-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".eot": "application/vnd.ms-fontobject",
};

const server = http.createServer((req, res) => {
  let sanitizedPath = path.normalize(req.url.split("?")[0]);
  if (sanitizedPath.startsWith("..")) {
    res.writeHead(403);
    return res.end("Forbidden");
  }

  let filePath = path.join(BUILD_DIR, sanitizedPath);

  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || "application/octet-stream";
      res.writeHead(200, { "Content-Type": contentType });
      return fs.createReadStream(filePath).pipe(res);
    }

    // SPA fallback: serve index.html for all client-side routes
    const indexPath = path.join(BUILD_DIR, "index.html");
    fs.readFile(indexPath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500);
        return res.end("Error loading application build. Please ensure 'npm run build' was executed.");
      }
      res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
      res.end(content);
    });
  });
});

server.listen(PORT, () => {
  console.log(`TCM Construction production server listening on port ${PORT}`);
});
