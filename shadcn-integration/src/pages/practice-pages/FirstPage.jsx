import { Button } from "@/components/ui/button";

const FirstPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">React + shadcn/ui </h1>

      <div className="flex gap-3">
        <Button>Primary Button</Button>

        <Button variant="outline">Outline Button</Button>

        <Button variant="destructive">Destructive Button</Button>
      </div>
    </main>
  );
};

export default FirstPage;
