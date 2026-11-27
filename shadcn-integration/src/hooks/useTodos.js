import { useEffect, useState } from "react";

export function useTodos() {
  // 1. State & Initial Load
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

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
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
  };
}
