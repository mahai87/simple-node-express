const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;

app.get("/", (req, res) => {
  res.send(
    "Hello, Monday! Today I am your funday!!I am learning node js with nodemon!"
  );
});

const users = [
  { id: 0, name: "Kabana", email: "kabana@gmail.com" },
  { id: 1, name: "dabana", email: "dabana@gmail.com" },
  { id: 2, name: "tabana", email: "tabana@gmail.com" },
  { id: 3, name: "Fabana", email: "fabana@gmail.com" },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});
// app.method
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);

  console.log("hitting the post", req.body);
  res.json(newUser);
});
// Dynamic api
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.listen(port, () => {
  console.log("listening to port", port);
});
