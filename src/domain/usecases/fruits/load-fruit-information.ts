import { FruitInformationModel } from "@/domain/@models/fruits";

export interface LoadFruitInformation {
  load: ({ id }: { id: string }) => Promise<LoadFruitInformation.Model>;
}

namespace LoadFruitInformation {
  export type Model = FruitInformationModel | {};
}
