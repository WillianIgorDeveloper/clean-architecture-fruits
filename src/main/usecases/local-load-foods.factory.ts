import { LocalLoadFoods } from "@/data/usecases/local-load-foods";
import { LoadFoods } from "@/domain/usecases/load-foods";

export const makeLocalLoadFoods = (): LoadFoods => {
  return new LocalLoadFoods();
};
