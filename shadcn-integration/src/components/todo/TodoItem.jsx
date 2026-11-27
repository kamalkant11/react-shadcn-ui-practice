import { Card, CardTitle } from "../ui/card";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <Card
      className={`flex items-center justify-between flex-row w-full shadow-lg px-4 py-5 border-2 transition-all duration-200 ${
        todo.completed
          ? "bg-muted/50 border-primary/40 opacity-75"
          : "bg-card border-border"
      }`}
    >
      <CardTitle
        className={`text-lg ${
          todo.completed
            ? "text-muted-foreground line-through"
            : "text-card-foreground"
        }`}
      >
        {todo.title}
      </CardTitle>
      <div className="flex gap-4 items-center">
        <Checkbox
          className="rounded-md p-4"
          checked={todo.completed}
          onCheckedChange={() => onToggleTodo(todo.id)}
        />
        <Button
          variant="destructive"
          className="py-5 px-3"
          onClick={() => onDeleteTodo(todo.id)}
        >
          <Trash2 size={18} />
        </Button>
      </div>
    </Card>
  );
};

export default TodoItem;
