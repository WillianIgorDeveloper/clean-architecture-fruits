import { FruitInformationModel } from "@/domain/@models/fruits";
import { LoadFruitInformation } from "@/domain/usecases/fruits";
import { HttpClient, HttpStatusCode } from "@/data/http";
import { UnauthorizedError, UnexpectedError } from "@/data/errors";

export class RemoteLoadFruitInformation implements LoadFruitInformation {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadFruitInformation.Model>,
  ) {}

  async load({ id }: { id: string }): Promise<RemoteLoadFruitInformation.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "get",
      params: id,
    });

    const remoteFruitInformationResponse = httpResponse.body || {};

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return remoteFruitInformationResponse;

      case HttpStatusCode.unauthorized:
        throw new UnauthorizedError();

      default:
        throw new UnexpectedError();
    }
  }
}

namespace RemoteLoadFruitInformation {
  export type Model = FruitInformationModel | {};
}
