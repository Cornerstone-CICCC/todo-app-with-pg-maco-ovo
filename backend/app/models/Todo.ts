import pool from "../db/pool.ts";

// ==== GET
export const getTodos = async () => {
	const result = await pool.query("SELECT * FROM todos;");

	return result.rows;
};

// ==== POST
export const addTodo = async (task: string) => {
	const result = await pool.query(
		"INSERT INTO todos (task) VALUES ($1) RETURNING *;",
		[task],
	);
	return result.rows[0];
};

// ==== PUT
export const editTodo = async (id: number, task?: string, done?: boolean) => {
	const result = await pool.query(
		"UPDATE todos SET task = COALESCE($1,task), done = COALESCE($2, done) WHERE id = $3 RETURNING *;",
		[task ?? null, done ?? null, id],
	);

	return result.rows[0];
};

// ==== DELETE
export const removeTodo = async (id: number) => {
	const result = await pool.query(
		"DELETE FROM todos WHERE id = $1 RETURNING *;",
		[id],
	);
	return result.rows[0];
};
