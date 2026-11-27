import TodoForm from "@/components/todo/TodoForm";
import TodoList from "@/components/todo/TodoList";
import { useTodos } from "@/hooks/useTodos";
import { Button } from "@/components/ui/button";

const TodoPage = () => {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    deleteTodo,
    toggleTodo,
    totalCount,
    activeCount,
    completedCount,
  } = useTodos();

  const filterTabs = [
    { key: "all", label: `All (${totalCount})` },
    { key: "active", label: `Active (${activeCount})` },
    { key: "completed", label: `Completed (${completedCount})` },
  ];

  return (
    <main className="w-full min-h-screen flex flex-col items-center space-y-3 bg-background text-foreground">
      <h1 className="mt-10 font-bold text-2xl">Task Manager</h1>

      <p className="text-md font-medium text-muted-foreground">
        Manage your daily tasks.
      </p>

      <TodoForm addTodo={addTodo} />

      {totalCount > 0 && (
        <div className="flex w-full max-w-xl items-center justify-between rounded-lg border bg-card p-2 shadow-sm">
          <div className="flex gap-1.5">
            {filterTabs.map((tab) => (
              <Button
                key={tab.key}
                size="sm"
                variant={filter === tab.key ? "default" : "ghost"}
                onClick={() => setFilter(tab.key)}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
      )}

      <TodoList
        todos={todos}
        onDeleteTodo={deleteTodo}
        onToggleTodo={toggleTodo}
      />
    </main>
  );
};

export default TodoPage;
