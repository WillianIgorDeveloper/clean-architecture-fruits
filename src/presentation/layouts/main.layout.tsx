import { ChildrenType } from "@/@types/children.type";
import { Navbar } from "../components/navbar/navbar";

export function MainLayout({ children }: ChildrenType) {
  return (
    <div className="container h-screen p-6">
      <Navbar />
      {children}
    </div>
  );
}
