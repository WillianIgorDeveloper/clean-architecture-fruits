import { DeleteResponseModel } from "@/domain/@models/responses";

export interface DeleteFruit {
  delete: ({ id }: { id: string }) => Promise<DeleteFruit.Response>;
}

namespace DeleteFruit {
  export type Response = DeleteResponseModel;
}
