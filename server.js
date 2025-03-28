require("dotenv").config();
const http = require("http");
const handleUserRoutes = require("./backend/routes/userRoutes");

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/api/users")) {
    handleUserRoutes(req, res);
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("API is running...\n");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
