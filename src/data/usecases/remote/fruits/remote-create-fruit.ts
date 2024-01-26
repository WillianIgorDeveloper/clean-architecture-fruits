import { FruitModel } from "@/domain/@models/fruits";
import { CreateFruit } from "@/domain/usecases/fruits";
import { HttpClient, HttpStatusCode } from "@/data/http";
import { UnexpectedError, UnauthorizedError } from "@/data/errors";
import { CreateResponseModel } from "@/domain/@models/responses";

export class RemoteCreateFruit implements CreateFruit {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteCreateFruit.Model>,
  ) {}

  async create({ body }: { body: CreateFruit.Body }): Promise<CreateFruit.Response> {
    const httpResponse = await this.httpClient.request({
      data: {
        url: this.url,
        method: "post",
        body,
      },
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

namespace RemoteCreateFruit {
  export type Model = FruitModel;
  export type Body = FruitModel;
  export type Response = CreateResponseModel<Model>;
}
