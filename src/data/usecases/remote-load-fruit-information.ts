import { FruitInformationModel } from "@/domain/@models/fruits/fruit-information.model";
import { LoadFruitInformation } from "@/domain/usecases/fruits/load-fruit-information";
import { HttpClient, HttpStatusCode } from "../http/http-client";
import { UnauthorizedError } from "@/data/errors/unauthorized-error";
import { UnexpectedError } from "@/data/errors/unexpected-error";

export class RemoteLoadFruitInformation implements LoadFruitInformation {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadFruitInformation.Model>,
  ) {}

  async load({ name }: { name: string }): Promise<RemoteLoadFruitInformation.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "get",
      params: name,
    });

    const remoteFruitInformation = httpResponse.body || {};

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return remoteFruitInformation;

      case HttpStatusCode.unauthorized:
        throw new UnauthorizedError();

      default:
        throw new UnexpectedError();
    }
  }
}

export namespace RemoteLoadFruitInformation {
  export type Model = FruitInformationModel | {};
}
