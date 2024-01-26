import { FruitInformationModel } from "@/domain/@models/fruits";
import { EditResponseModel } from "@/domain/@models/responses";

export interface EditFruit {
  edit: ({ fruit }: { fruit: EditFruit.Model }) => Promise<EditFruit.Response>;
}

namespace EditFruit {
  export type Model = FruitInformationModel;
  export type Response = EditResponseModel<Model>;
}
