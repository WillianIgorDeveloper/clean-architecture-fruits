import { FruitModel } from "@/domain/@models/fruits";
import { CreateResponseModel } from "@/domain/@models/responses";

export interface CreateFruit {
  create: ({ body }: { body: CreateFruit.Body }) => Promise<CreateFruit.Response>;
}

export namespace CreateFruit {
  export type Body = FruitModel;
  export type Response = CreateResponseModel<Body>;
}
