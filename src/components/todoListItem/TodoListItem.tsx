import "./todoListItem.css";

type TodoListItemProps = {
  text: string;
  completed: boolean;
  id: number;
  onToggleTodo: (id: number) => void;
};

export function TodoListItem({
  text,
  completed,
  id,
  onToggleTodo,
}: TodoListItemProps) {
  return (
    <li className="todo-item">
      <input
        className="checkbox"
        onChange={() => onToggleTodo(id)}
        checked={completed}
        type="checkbox"
      />
      <label className={`todo-text ${completed && "completed"}`}>{text}</label>
    </li>
  );
}
