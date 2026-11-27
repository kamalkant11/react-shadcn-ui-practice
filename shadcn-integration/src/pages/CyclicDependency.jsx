import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const CyclicDependency = () => {
  const [count, setCount] = useState(0);
  const [prev, setPrev] = useState(count);

  // This creates the cyclic dependency coz updating the state inside the effect which is used in the dependency array
    useEffect(() => {
      setCount(count + 1)
    }, [count])

  // Use the functional state update for initial mount
  // useEffect(() => {
  //     setCount(count + 1)
  // }, [])

  // Dont keep the chnage the same state in the effect
  // useEffect(() => {
  //   setPrev(count - 1);
  // }, [count]);

  // Keep condition updated of state in the use effect
//   useEffect(() => {
//     if (count < 50) {
//       setCount(count + 1);
//     }
//   }, [count]);

  return (
   <main className="flex flex-col min-h-screen items-center justify-center bg-muted/50 px-4 py-8 my-2 space-y-4">
      <h1 className="text-2xl font-bold">React Hooks & Cyclic Dependecy</h1>
      <Card className="w-full max-w-xs p-4 flex flex-col justify-center items-center border-2 space-y-4">
        <div className="flex space-x-4">
          <Card className="flex flex-col h-30 w-30 items-center">
            <CardDescription>Prev Count:</CardDescription>
            <CardTitle className="text-2xl font-bold">{prev}</CardTitle>
          </Card>

          <Card className="flex flex-col h-30 w-30 items-center">
            <CardDescription>Count:</CardDescription>
            <CardTitle className="text-2xl font-bold">{count}</CardTitle>
          </Card>
        </div>

        <div className="space-x-4">
          <Button
            className="px-6 py-4 text-lg"
            onClick={() => setCount(() => count + 1)}
          >
            Increase
          </Button>
          <Button
            className="px-6 py-4 text-lg"
            onClick={() => setCount(() => count - 1)}
          >
            Decrease
          </Button>
        </div>
      </Card>
    </main>
  );
};

export default CyclicDependency;
