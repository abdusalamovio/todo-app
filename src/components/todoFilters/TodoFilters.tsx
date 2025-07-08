import "./todoFilters.css";

type FilterType = "all" | "active" | "completed";

type TodoFiltersProps = {
  filter: string;
  setFilter: (filter: FilterType) => void;
};

export function TodoFilters({ filter, setFilter }: TodoFiltersProps) {
  const buttonsData: { name: FilterType; label: string }[] = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "completed", label: "Completed" },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    return (
      <button
        key={name}
        className={`todo-filter-btn ${name === filter ? " active" : ""}`}
        onClick={() => setFilter(name)}
        type="button"
      >
        {label}
      </button>
    );
  });

  return <div className="todo-filters">{buttons}</div>;
}
