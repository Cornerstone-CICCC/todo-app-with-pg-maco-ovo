import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import {
	getTodos,
	addTodo,
	editTodo,
	removeTodo,
} from "./constrollers/todosControllers.ts";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// CRUD
app.get("/todos", getTodos);
app.post("/todos", addTodo);
app.put("/todos/:id", editTodo);
app.delete("/todos/:id", removeTodo);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
