import Link from "next/link";
import { OrangeLayoutProps } from "./types";
import { ROUTES } from "@/presentation/@consts/routes";

export function OrangeLayout({}: OrangeLayoutProps) {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold">Orange</h1>
      <ul className="flex gap-3 my-3">
        <li>
          <Link href={ROUTES.HOME} className="underline text-blue-400">
            Home
          </Link>
        </li>
        <li>
          <Link href={ROUTES.MANGO} className="underline text-blue-400">
            Mango
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
