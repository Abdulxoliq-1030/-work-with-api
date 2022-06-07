const express = require("express");
const app = express();
const path = require("path");
const { v4 } = require("uuid");

let CONTACTS = [
  { id: v4(), name: "Abdulxoliq", value: "+99891 677 10 30", marked: false },
];

app.use(express.json());

// GET
app.get("/api/contacts", (req, res) => {
  setTimeout(() => {
    res.status(200).json(CONTACTS);
  }, 3000);
});

// DELETE
app.delete("/api/contacts/:id", (req, res) => {
  CONTACTS = CONTACTS.filter((c) => c.id !== req.params.id);
  res.status(200).json({ message: "Contact was delete successfully" });
});

// POST
app.post("/api/contacts", (req, res) => {
  const contact = { ...req.body, id: v4(), marked: false };
  CONTACTS.push(contact);
  res.status(201).json(contact);
});

// PUT
app.put("/api/contacts/:id", (req, res) => {
  const idx = CONTACTS.findIndex((c) => c.id === req.params.id);
  CONTACTS[idx] = req.body;
  res.json(CONTACTS[idx]);
});

app.use(express.static(path.resolve(__dirname, "client")));

// app.get("/", (req, res) => {
//   // request bu so'rov
//   // response bu javob

//   res.send("Hello world");
// });

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "index.html"));
});

app.listen(5000, () => console.log("Server has been started on port 5000..."));
