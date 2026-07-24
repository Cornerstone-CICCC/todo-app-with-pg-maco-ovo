import pool  from "../db/pool.ts";

export const getAllTodos = async () => {
	const result = await pool.query("SELECT * FROM todos;");

	return result.rows;
};
