import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleCreateTodo = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;

    addTodo(todo)

    setTodo("");
  };

  return (
    <form
      onSubmit={handleCreateTodo}
      className="flex w-full max-w-xl space-x-4"
    >
      <Input
        id="create-todo"
        className="py-6 border-gray-400 border-2 md:text-lg"
        type="text"
        placeholder="What needs to be done?"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <Button className="px-4 py-6" type="submit">
        + Add New
      </Button>
    </form>
  );
};

export default TodoForm;
