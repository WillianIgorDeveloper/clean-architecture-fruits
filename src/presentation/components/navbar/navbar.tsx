import { ROUTES } from "@/presentation/@consts/routes";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="py-3 px-6 bg-zinc-200 flex justify-between rounded-lg fixed container shadow">
      <Link href={ROUTES.HOME}>
        <h1>React Clean Architecture</h1>
      </Link>
      <nav>
        <ul className="flex items-center gap-6">
          <li>
            <Link href={ROUTES.MANGO} className="font-semibold">
              Mango
            </Link>
          </li>
          <li>
            <Link href={ROUTES.ORANGE} className="font-semibold">
              Orange
            </Link>
          </li>
          <li>
            <Link href={ROUTES.PEAR} className="font-semibold">
              Pear
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
