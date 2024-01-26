import { makeRemoteLoadFruitsInformation } from "@/main/usecases/remote/fruits/remote-load-fruit-information.factory";
import { MangoLayout } from "./layout";

export async function MangoPage() {
  const fruitInformation = await makeRemoteLoadFruitsInformation().load({ name: "mango" });
  console.log(fruitInformation);
  return <MangoLayout />;
}
