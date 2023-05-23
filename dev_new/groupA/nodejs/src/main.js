import express from "express";
import cors from "cors";

const webServer = express();
webServer.use(cors());
webServer.use(express.json());

const ipAddress = "127.0.0.1";
const port = 3001;

const users = { 
    username: "admin", 
    email: "admin@gmail.com", 
    password: "admin" 
};

const userLogin = {};

webServer.get("/", (request, response) => {
  response.send("Hello World");
});

webServer.get("/users", (request, response) => {
  response.json(userLogin);
});

webServer.post("/users", (request, response) => {
  const email = request.body.email;
  const password = request.body.password;

  if (email !== users.email || password !== users.password) {
    response.send("Login Failed!");
  } else if (email === users.email && password === users.password) {
    userLogin.email = email;
    userLogin.password = password;
    userLogin.username = users.username;
    response.send("Login Success!");
  }

  console.log(userLogin);
});

webServer.listen(port, ipAddress, () => {
  console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
  console.log(`Address: http://${ipAddress}:${port}`);
});
