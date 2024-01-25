import Link from "next/link";
import { PearLayoutProps } from "./types";
import { ROUTES } from "@/presentation/@consts/routes";

export function PearLayout({}: PearLayoutProps) {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold">Pear</h1>
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
          <Link href={ROUTES.MANGO} className="underline text-blue-400">
            Mango
          </Link>
        </li>
      </ul>
    </main>
  );
}
