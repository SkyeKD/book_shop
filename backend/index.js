
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mysql from "mysql2/promise"; 

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 8800;

app.use(express.json()); 
app.use(cors());


const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: true } : false,
  waitForConnections: true,
  connectionLimit: 10, 
  queueLimit: 0,
});


async function testDBConnection() {
  try {
    const connection = await db.getConnection();
    console.log("✅ Successfully connected to MySQL RDS!");
    connection.release();
  } catch (err) {
    console.error("❌ Database connection failed:", err);
  }
}
testDBConnection();


app.get("/books", async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM books");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Database error", details: err.message });
  }
});


app.post("/books", async (req, res) => {
  try {
    const query = "INSERT INTO books (`title`, `description`, `price`, `cover`) VALUES (?, ?, ?, ?)";
    const values = [req.body.title, req.body.description, req.body.price, req.body.cover];

    const [result] = await db.execute(query, values);
    res.json({ message: "Book has been created successfully!!!", insertId: result.insertId });
  } catch (err) {
    res.status(500).json({ error: "Database error", details: err.message });
  }
});


app.delete("/books/:id", async (req, res) => {
  try {
    const query = "DELETE FROM books WHERE id = ?";
    await db.execute(query, [req.params.id]);
    res.json({ message: "Book has been deleted successfully!!!" });
  } catch (err) {
    res.status(500).json({ error: "Database error", details: err.message });
  }
});


app.put("/books/:id", async (req, res) => {
  try {
    const query = "UPDATE books SET `title`= ?, `description`= ?, `price`= ?, `cover`= ? WHERE id = ?";
    const values = [req.body.title, req.body.description, req.body.price, req.body.cover, req.params.id];

    await db.execute(query, values);
    res.json({ message: "Book has been updated successfully!!!" });
  } catch (err) {
    res.status(500).json({ error: "Database error", details: err.message });
  }
});


app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});