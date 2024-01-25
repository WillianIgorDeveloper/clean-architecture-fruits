import Link from "next/link";
import { ROUTES } from "@/presentation/@consts/routes";
import { MangoLayoutProps } from "./types";

export function MangoLayout({}: MangoLayoutProps) {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold">Mango</h1>
      <ul className="flex gap-3 my-3">
        <li>
          <Link href={ROUTES.HOME} className="underline text-blue-400">
            Home
          </Link>
        </li>
        <li>
          <Link href={ROUTES.ORANGE} className="underline text-blue-400">
            Orange
          </Link>
        </li>
        <li>
          <Link href={ROUTES.PEAR} className="underline text-blue-400">
            Pear
          </Link>
        </li>
      </ul>
    </main>
  );
}
