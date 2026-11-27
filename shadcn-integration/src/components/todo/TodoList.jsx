import TodoItem from "./TodoItem";
const TodoList = ({ todos, onDeleteTodo, onToggleTodo}) => {
  return (
    <div className="flex flex-col w-full max-w-xl gap-4 mt-3">
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
          key={todo.id}
        />
      ))}
    </div>
  );
};

export default TodoList;
