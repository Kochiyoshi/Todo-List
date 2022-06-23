import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
	const [todos, setTodos] = useState([]);
	const addTodoHandler = (todo) => {
		if (!todo.text || /^\s*$/.test(todo.text)) {
			return;
		}

		const newTodos = [todo, ...todos];

		setTodos(newTodos);
	};

	const completeTodoHandler = (id) => {
		let updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	const updateTodoHandler = (id, newValue) => {
		if (!newValue.text || /^\s*$/.test(newValue.text)) {
			return;
		}
		setTodos((prev) => prev.map((todo) => (todo.id === id ? newValue : todo)));
	};

	const removeTodoHandler = (id) => {
		const removeArr = [...todos].filter((todo) => todo.id !== id);

		setTodos(removeArr);
	};

	return (
		<div>
			<h1>Task for Today</h1>
			<TodoForm onSubmit={addTodoHandler} />
			<Todo
				todos={todos}
				completeTodo={completeTodoHandler}
				updateTodo={updateTodoHandler}
				removeTodo={removeTodoHandler}
			/>
		</div>
	);
}

export default TodoList;
