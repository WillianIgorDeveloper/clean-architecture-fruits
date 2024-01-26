import { FruitModel } from "@/domain/@models/fruits/fruit.model";
import { LoadFruits } from "@/domain/usecases/fruits/load-fruits";
import { HttpClient, HttpStatusCode } from "../http/http-client";
import { UnauthorizedError } from "@/data/errors/unauthorized-error";
import { UnexpectedError } from "@/data/errors/unexpected-error";

export class RemoteLoadFruits implements LoadFruits {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadFruits.Model>,
  ) {}

  async load(): Promise<RemoteLoadFruits.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "get",
    });

    const foods = httpResponse.body || [];

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return foods;

      case HttpStatusCode.unauthorized:
        throw new UnauthorizedError();

      default:
        throw new UnexpectedError();
    }
  }
}

namespace RemoteLoadFruits {
  export type Model = FruitModel[] | [];
}
