import { FruitInformationModel } from "@/domain/@models/fruits/";

export interface LoadFruitInformation {
  load: ({ name }: { name: string }) => Promise<LoadFruitInformation.Model>;
}

namespace LoadFruitInformation {
  export type Model = FruitInformationModel | {};
}
