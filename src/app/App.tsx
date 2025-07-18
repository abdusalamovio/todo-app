import "./app.css";

import { useState } from "react";
import { TodoForm, TodoList, TodoFilters } from "@/components";

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
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

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

  const filterTodos = () => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className="app-container">
      <h1 className="app-title">todos</h1>
      <div className="todo-container">
        <TodoForm onAddTodo={addTodo} />
        <TodoList todos={filterTodos()} onToggleTodo={toggleTodo} />

        <div className="todo-footer">
          <div className="status-bar">
            {remainingTasks === 0
              ? "No items left"
              : `${remainingTasks} ${
                  remainingTasks === 1 ? "item" : "items"
                } left`}
          </div>

          <TodoFilters filter={filter} setFilter={setFilter} />

          <button className="clear-completed" onClick={clearCompleted}>
            Clear completed
          </button>
        </div>
      </div>
    </div>
  );
}
