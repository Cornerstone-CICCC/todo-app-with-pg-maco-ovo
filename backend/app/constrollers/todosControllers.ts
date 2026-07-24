import express from "express";
import * as TodoModel from "../models/todo.ts";

export const getTodos = async (req: express.Request, res: express.Response) => {
	try {
		const todos = await TodoModel.getAllTodos();

		res.status(200).json(todos);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Failed to fetch todos" });
	}
};
