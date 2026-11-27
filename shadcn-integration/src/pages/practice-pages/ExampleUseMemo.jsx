import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMemo, useState } from "react";

const products = [
  { id: 1, name: "Wireless Mouse", price: 799 },
  { id: 2, name: "Mechanical Keyboard", price: 2499 },
  { id: 3, name: "USB-C Hub", price: 1299 },
  { id: 4, name: "Noise-Cancelling Headphones", price: 4999 },
  { id: 5, name: "Webcam 1080p", price: 1899 },
  { id: 6, name: "Laptop Stand", price: 999 },
  { id: 7, name: "Portable SSD 1TB", price: 6999 },
  { id: 8, name: "Desk Mat", price: 499 },
  { id: 9, name: "LED Desk Lamp", price: 1199 },
  { id: 10, name: "Surge Protector Power Strip", price: 649 },
];

const ExampleUseMemo = () => {
  const [count, setCount] = useState(0);
  const [filteredThreshold, setFilterThreshold] = useState(1500);

  // IN-EFFICIENCY: The function runs on every render
  // const filterProducts = () => {
  //   console.log("Partitioning products...");
  //   const expensive = [];
  //   const remaining = [];

  //   for (const product of products) {
  //     if (product.price > filteredThreshold) {
  //       expensive.push(product);
  //     } else {
  //       remaining.push(product);
  //     }
  //   }

  //   return { expensiveProducts: expensive, remainingProducts: remaining };
  // };
  // const { expensiveProducts, remainingProducts } = filterProducts();

  // Solved: useMemo(() => {}, []) runs the memoised function on when the dependncy state changes.
  const { expensiveProducts, remainingProducts } = useMemo(() => {
    console.log("Partitioning products...");
    const expensive = [];
    const remaining = [];

    for (const product of products) {
      if (product.price > filteredThreshold) {
        expensive.push(product);
      } else {
        remaining.push(product);
      }
    }

    return { expensiveProducts: expensive, remainingProducts: remaining };
  }, [filteredThreshold]);

  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-muted/50 px-4 py-8 my-2 space-y-4">
      <h1 className="text-2xl font-bold">useMemo UseCase</h1>
      <div className="flex space-x-6">
        <Card className="w-full max-w-xs p-4 flex flex-col justify-center items-center border-2 space-y-4 h-[25%]">
          <div className="flex space-x-4">
            <Card className="flex flex-col h-30 w-30 items-center">
              <CardDescription>Count:</CardDescription>
              <CardTitle className="text-2xl font-bold">{count}</CardTitle>
            </Card>
          </div>

          <div className="flex space-x-4">
            <Button
              className="px-6 py-4 text-lg"
              onClick={() => setCount((prev) => prev + 1)}
            >
              Increase
            </Button>
            <Button
              className="px-6 py-4 text-lg"
              onClick={() => setCount((prev) => prev - 1)}
            >
              Decrease
            </Button>
          </div>
        </Card>

        <Card className="w-full max-w-3xl p-6 flex flex-col border-2">
          <CardTitle className="text-xl font-bold flex justify-between items-center">
            Filtered Products ({expensiveProducts.length})
            <div className="space-y-2 flex">
              <Label className="font-medium">Minimum price:</Label>
              <Input
                type="number"
                step={100}
                value={filteredThreshold}
                onChange={(e) => setFilterThreshold(Number(e.target.value))}
                className="border rounded p-2 w-full"
              />
            </div>
          </CardTitle>

          <CardContent>
            <div className="grid grid-cols-4 gap-4 sm:grid-cols-2 xs:grid-cols-1">
              {expensiveProducts.map((product) => (
                <Card key={product.id}>
                  <CardContent className="flex items-center justify-between p-3">
                    <span className="font-medium">{product.name}</span>
                    <span className="font-semibold">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>

          <div className="border-t" />

          <CardTitle className="text-xl font-bold">
            Other Products ({remainingProducts.length})
          </CardTitle>

          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              {remainingProducts.map((product) => (
                <Card key={product.id}>
                  <CardContent className="flex items-center justify-between p-3">
                    <span className="font-medium">{product.name}</span>
                    <span className="font-semibold">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default ExampleUseMemo;
