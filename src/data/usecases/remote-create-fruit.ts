import { FruitModel } from "@/domain/@models/fruits/fruit.model";
import { CreateFruit } from "@/domain/usecases/fruits/create-fruit";
import { HttpClient, HttpStatusCode } from "../http/http-client";
import { UnexpectedError } from "../errors/unexpected-error";
import { UnauthorizedError } from "../errors/unauthorized-error";

export class RemoteCreateFruit implements CreateFruit {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteCreateFruit.Model>,
  ) {}

  async create({ body }: { body: CreateFruit.Body }): Promise<CreateFruit.Model> {
    const { id, name } = body;

    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "post",
      body: { id, name },
    });

    const remoteFruit = httpResponse.body;

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return remoteFruit;
      case HttpStatusCode.unauthorized:
        throw new UnauthorizedError();
      default:
        throw new UnexpectedError();
    }
  }
}

namespace RemoteCreateFruit {
  export type Model = FruitModel;
  export type Body = FruitModel;
}
