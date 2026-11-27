import TodoForm from "@/components/todo/TodoForm";
import TodoList from "@/components/todo/TodoList";
import { useEffect, useState } from "react";

const TodoPage = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }

        return todo;
      }),
    );
  };

  return (
    <main className="w-full min-h-screen flex flex-col items-center space-y-3 bg-background text-foreground">
      <h1 className="mt-10 font-bold text-2xl">Task Manager</h1>

      <p className="text-md font-medium text-muted-foreground">
        Manage your daily tasks.
      </p>

      <TodoForm todos={todos} setTodos={setTodos} />

      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
      />
    </main>
  );
};

export default TodoPage;
