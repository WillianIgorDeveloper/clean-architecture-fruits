import { FruitInformationModel } from "@/domain/@models/fruits";
import { LoadFruitInformation } from "@/domain/usecases/fruits";
import { HttpClient, HttpStatusCode } from "@/data/http";
import { UnauthorizedError, UnexpectedError } from "@/data/errors";

export class RemoteLoadFruitInformation implements LoadFruitInformation {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadFruitInformation.Model>,
  ) {}

  async load({ name }: { name: string }): Promise<RemoteLoadFruitInformation.Model> {
    const httpResponse = await this.httpClient.request({
      data: {
        url: this.url,
        method: "get",
        params: [name],
      },
    });

    const remoteFruitInformationResponse = httpResponse.body || null;

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
  export type Model = FruitInformationModel | null;
}
