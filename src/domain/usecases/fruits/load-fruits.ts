import { FruitModel } from "@/domain/@models/fruits";

export interface LoadFruits {
  load: () => Promise<LoadFruits.Model>;
}

namespace LoadFruits {
  export type Model = FruitModel[] | [];
}
