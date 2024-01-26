import { UnauthorizedError, UnexpectedError } from "@/data/errors";
import { HttpClient, HttpStatusCode } from "@/data/http";
import { FruitInformationModel } from "@/domain/@models/fruits";
import { EditResponseModel } from "@/domain/@models/responses";
import { EditFruit } from "@/domain/usecases/fruits";

export class RemoteEditFruit implements EditFruit {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteEditFruit.Model>,
  ) {}

  async edit({ fruit }: { fruit: RemoteEditFruit.Model }): Promise<RemoteEditFruit.Respone> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "put",
      body: fruit,
    });

    const remoteFruitResponse = {
      success: httpResponse.succsess,
      message: httpResponse.message,
      body: httpResponse.body || null,
    };

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return remoteFruitResponse;

      case HttpStatusCode.unauthorized:
        throw new UnauthorizedError();

      default:
        throw new UnexpectedError();
    }
  }
}

namespace RemoteEditFruit {
  export type Respone = EditResponseModel<FruitInformationModel>;
  export type Model = FruitInformationModel;
}
