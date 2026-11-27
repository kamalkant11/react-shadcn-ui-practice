import CyclicDependency from "./pages/CyclicDependency";
import ExampleUseMemo from "./pages/ExampleUseMemo";
import FirstPage from "./pages/FirstPage";
import LoginPage from "./pages/LoginPage";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <div>
      <FirstPage />

      <LoginPage />

      <TodoPage />

      <CyclicDependency />

      <ExampleUseMemo />
    </div>
  );
}

export default App;
