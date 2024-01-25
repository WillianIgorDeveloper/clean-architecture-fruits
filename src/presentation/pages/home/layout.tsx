import { HomeLayoutProps } from "./types";

export function HomeLayout({}: HomeLayoutProps) {
  return (
    <main className="h-full flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold">Clean Arquitecture Foods</h1>
    </main>
  );
}
