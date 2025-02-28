
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config(); 

const app = express();
const PORT = 8800;

app.use(express.json()); 
app.use(cors());


const db = mysql.createConnection({
  host: process.env.DB_HOST || "db",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "rootpassword",
  database: process.env.DB_NAME || "bookshop",
  port: process.env.DB_PORT || 3306
});


app.get("/", (req, res) => {
  res.json("Hello World from the backend!!!");
});


app.get("/books", (req, res) => {
  const query = "SELECT * FROM books";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const query =
    "INSERT INTO books (`title`, `description`, `price`, `cover`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.description,
    req.body.price,
    req.body.cover,
  ];

  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been created successfully!!!");
  });
});

app.delete("/books/:id", (req, res) => {
  const bookID = req.params.id;
  const query = "DELETE FROM books WHERE id = ?";

  db.query(query, [bookID], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been deleted successfully!!!");
  });
});

app.put("/books/:id", (req, res) => {
  const bookID = req.params.id;
  const query =
    "UPDATE books SET `title`= ?, `description`= ?, `price`= ?, `cover`= ? WHERE id = ?";

  const values = [
    req.body.title,
    req.body.description,
    req.body.price,
    req.body.cover,
  ];

  db.query(query, [...values, bookID], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been updated successfully!!!");
  });
});

app.listen(8800, () => {
  console.log("Connect to the backend!!!!");
});