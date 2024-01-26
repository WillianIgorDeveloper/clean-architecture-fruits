import { FruitModel } from "@/domain/@models/fruits";
import { LoadFruits } from "@/domain/usecases/fruits";
import { HttpClient, HttpStatusCode } from "@/data/http";
import { UnauthorizedError, UnexpectedError } from "@/data/errors";

export class RemoteLoadFruits implements LoadFruits {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadFruits.Model>,
  ) {}
  async load(): Promise<RemoteLoadFruits.Model> {
    const httpResponse = await this.httpClient.request({
      data: {
        url: this.url,
        method: "get",
      },
    });

    const remoteFoodsResponse = httpResponse.body || [];

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return remoteFoodsResponse;

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
