const handleUserRoutes = (req, res) => {
    if (req.url === "/api/users" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "User list fetched successfully!" }));
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Route not found");
    }
  };
  
  module.exports = handleUserRoutes;
  