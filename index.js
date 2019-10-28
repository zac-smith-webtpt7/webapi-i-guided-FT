const express = require("express");

const db = require("./data/hubs-model.js");

const server = express(); // create a server

server.use(express.json());

// route/route handlers

// handles GET requests on localhost:8000
server.get("/", (req, res) => {
  res.send("Hello Node 23");
});

//
server.get("/hubs", (req, res) => {
  db.find()
    .then(hubs => {
      res.json(hubs);
    })
    .catch(error => {
      res.json({ error: "failed to get hubs from db" });
    });
});

server.post("/hubs", (req, res) => {
  const hubInformation = req.body;
  console.log("hub information", hubInformation);
  db.add(hubInformation)
    .then(hub => {
      res.json(hub);
    })
    .catch(error => {
      res.json({ error: "failed to get hub from db" });
    });
});

// listen for requests on particular port on localhost
const port = 8000;
server.listen(port, () => {
  console.log(`\n=== API on port ${port} ===\n`);
});
