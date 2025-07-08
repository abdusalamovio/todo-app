import "./todoForm.css";

import { useForm } from "react-hook-form";

type TodoFormProps = {
  onAddTodo: (text: string) => void;
};

type FormValues = {
  todo: string;
};

export function TodoForm({ onAddTodo }: TodoFormProps) {
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    if (data.todo.trim().length < 3) return;
    onAddTodo(data.todo.trim());
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="todo-form">
      <input
        {...register("todo", {
          required: true,
        })}
        minLength={3}
        className="todo-input"
        placeholder="What needs to be done?"
        type="text"
        autoFocus
      />
    </form>
  );
}
