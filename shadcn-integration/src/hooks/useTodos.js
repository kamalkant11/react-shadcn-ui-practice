import { useEffect, useState } from "react";

export function useTodos() {
  // 1. State & Initial Load
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

   const [filter, setFilter] = useState("all"); // "all" | "active" | "completed"

  // 2. Side Effect for localStorage sync
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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


  return {
    todos: filteredTodos,
    filter,
    setFilter,
    addTodo,
    deleteTodo,
    toggleTodo,
    totalCount,
    completedCount,
    activeCount
  };
}
