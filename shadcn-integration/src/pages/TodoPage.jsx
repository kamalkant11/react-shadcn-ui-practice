import TodoForm from "@/components/todo/TodoForm";
import TodoList from "@/components/todo/TodoList";
import { useTodos } from "@/hooks/useTodos";

const TodoPage = () => {
  const { todos, addTodo, deleteTodo, toggleTodo } = useTodos();

  return (
    <main className="w-full min-h-screen flex flex-col items-center space-y-3 bg-background text-foreground">
      <h1 className="mt-10 font-bold text-2xl">Task Manager</h1>

      <p className="text-md font-medium text-muted-foreground">
        Manage your daily tasks.
      </p>

      <TodoForm addTodo={addTodo} />

      <TodoList
        todos={todos}
        onDeleteTodo={deleteTodo}
        onToggleTodo={toggleTodo}
      />
    </main>
  );
};

export default TodoPage;
