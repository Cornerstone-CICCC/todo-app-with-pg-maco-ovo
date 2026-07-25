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

// ==== PUT
export const updateTodo = async (id: number, task: string, done: boolean) => {
	const result = await pool.query(
		"UPDATE todos SET task = $1, done = $2 WHERE id = $3 RETURNING *;",
		[task, done, id],
	);

	return result.rows[0];
};

// ==== DELETE
export const deleteTodo = async (id: number) => {
	const result = await pool.query(
		"DELETE FROM todos WHERE id = $1 RETURNING *;",
		[id],
	);
	return result.rows[0];
};
