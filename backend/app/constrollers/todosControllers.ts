import express from "express";
import * as TodoModel from "../models/todo.ts";

// -- R -- Read
export const getTodos = async (req: express.Request, res: express.Response) => {
	try {
		const todos = await TodoModel.getTodos();

		res.status(200).json(todos);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Failed to fetch todos" });
	}
};

// -- C -- Create
export const addTodo = async (req: express.Request, res: express.Response) => {
	try {
		const { task } = req.body;
		const newTodo = await TodoModel.addTodo(task);
		res.status(201).json(newTodo);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Failed to create a todo" });
	}
};

// -- U -- Update
export const editTodo = async (req: express.Request, res: express.Response) => {
	try {
		const id = parseInt(req.params.id as string, 10);
		const { task, done } = req.body;
		const updateData = await TodoModel.editTodo(id, task, done);

		if (!updateData) {
			return res.status(404).json({ message: "Todo not found" });
		}
		res.json({
			message: "Todo updated successfully",
			data: updateData,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Failed to edit todos" });
	}
};

// -- D -- Delete

export const removeTodo = async (
	req: express.Request,
	res: express.Response,
) => {
	try {
		const id = parseInt(req.params.id as string, 10);
		const deletedData = await TodoModel.removeTodo(id);

		if (!deletedData) {
			return res.status(404).json({ message: "Todo not found" });
		}

		res.json({
			message: "Todo deleted successfully",
			data: deletedData,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Failed to delete todos" });
	}
};
