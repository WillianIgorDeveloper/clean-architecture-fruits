import { ROUTES } from "@/presentation/@consts/routes";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="py-3 px-6 bg-zinc-100 flex justify-between rounded-lg fixed container">
      <h1 className="font-bold">React Clean Architecture</h1>
      <nav>
        <ul className="flex items-center gap-6">
          <li>
            <Link href={ROUTES.HOME} className="underline">
              Home
            </Link>
          </li>
          <li>
            <Link href={ROUTES.MANGO} className="underline">
              Mango
            </Link>
          </li>
          <li>
            <Link href={ROUTES.ORANGE} className="underline">
              Orange
            </Link>
          </li>
          <li>
            <Link href={ROUTES.PEAR} className="underline">
              Pear
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
