import { LocalLoadFoods } from "@/data/usecases/remote-load-fruits";
import { LoadFoods } from "@/domain/usecases/fruits/load-fruits";

export const makeLocalLoadFoods = (): LoadFoods => {
  return new LocalLoadFoods();
};
