import express from "express";
import dotenv from "dotenv";

import pool from "./db/pool.ts";
import {
	getTodos,
	addTodo,
	editTodo,
	removeTodo,
} from "./constrollers/todosControllers.ts";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// app.get("/test", async (req, res) => {
// 	try {
// 		const result = await pool.query("SELECT NOW()");
// 		res.json(result.rows[0]);
// 	} catch (error) {
// 		res.status(500).json({ error: "database connection failed" });
// 	}
// });

// CRUD
app.get("/todos", getTodos);
app.post("/todos", addTodo);
app.put("/todos/:id", editTodo);
app.delete("/todos/:id", removeTodo);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
