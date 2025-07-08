import "./app.css";

import { useState } from "react";
import { TodoForm, TodoList } from "@/components";

export type Todo = {
  text: string;
  completed: boolean;
  id: number;
};

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { text: "Тестовое задание", completed: false, id: 0 },
    { text: "Прекрасный код", completed: true, id: 1 },
    { text: "Покрытие тестами", completed: false, id: 2 },
  ]);
  const [maxId, setMaxId] = useState<number>(3);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      text: text,
      completed: false,
      id: maxId,
    };

    setTodos([...todos, newTodo]);
    setMaxId(maxId + 1);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const remainingTasks = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="app-container">
      <h1 className="app-title">todos</h1>
      <div className="todo-container">
        <TodoForm onAddTodo={addTodo} />
        <TodoList todos={todos} onToggleTodo={toggleTodo} />

        <div className="status-bar">{remainingTasks} items left</div>
      </div>
    </div>
  );
}
