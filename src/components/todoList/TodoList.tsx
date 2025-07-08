import "./todoList.css";

import type { Todo } from "@/app/App";
import { TodoListItem } from "@/components/todoListItem/TodoListItem";

type TodoListProps = {
  todos: Todo[];
  onToggleTodo: (id: number) => void;
};

export function TodoList({ todos, onToggleTodo }: TodoListProps) {
  const elements = todos.map((todo) => {
    return <TodoListItem key={todo.id} {...todo} onToggleTodo={onToggleTodo} />;
  });

  return <ul className="todo-list">{elements}</ul>;
}
