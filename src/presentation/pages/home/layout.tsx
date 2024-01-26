import { HomeLayoutProps } from "./types";

export function HomeLayout({ fruitsList }: HomeLayoutProps) {
  return (
    <main className="h-full flex flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-bold">Clean Arquitecture Foods</h1>
      <ul className="flex gap-3 flex-wrap justify-center">
        {fruitsList.map((fruit) => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>
    </main>
  );
}
