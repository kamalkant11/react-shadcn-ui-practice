import { useLocalStorage } from "./useLocalStorage";

export function useTodos() {
  // 1. State & Initial Load
  const [todos, setTodos] = useLocalStorage("todos", [])

  const [filter, setFilter] = useLocalStorage("todo_filter", "all")

  // 3. Action: Add Todo
  const addTodo = (title) => {
    const trimmed = title.trim();
    if (!trimmed) return;

    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), title: trimmed, completed: false },
    ]);
  };

  // 4. Action: Delete Todo
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // 5. Action: Toggle Todo
  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  // 6. Derived State (Calculated directly from todos—no extra useState needed!)
  const totalCount = todos.length;
  const completedCount = todos.filter((todo) => todo.completed).length;
  const activeCount = totalCount - completedCount;

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const clearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  return {
    todos: filteredTodos,
    filter,
    setFilter,
    addTodo,
    deleteTodo,
    toggleTodo,
    totalCount,
    completedCount,
    activeCount,
    clearCompleted
  };
}
