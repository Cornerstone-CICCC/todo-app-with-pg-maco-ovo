import pool from "../db/pool.ts";

// ==== GET
export const getAllTodos = async () => {
	const result = await pool.query("SELECT * FROM todos;");

	return result.rows;
};

// ==== POST
export const createTodo = async (task: string) => {
	const result = await pool.query(
		"INSERT INTO todos (task) VALUES ($1) RETURNING *;",
		[task],
	);
	return result.rows[0];
};
