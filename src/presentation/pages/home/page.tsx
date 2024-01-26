import { makeRemoteLoadFruits } from "@/main/usecases/remote/fruits";
import { HomeLayout } from "./layout";

export async function HomePage() {
  const fruitsList = await makeRemoteLoadFruits().load();
  return <HomeLayout fruitsList={fruitsList} />;
}
