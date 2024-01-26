import { UnauthorizedError, UnexpectedError } from "@/data/errors";
import { HttpClient, HttpStatusCode } from "@/data/http";
import { DeleteResponseModel } from "@/domain/@models/responses";
import { DeleteFruit } from "@/domain/usecases/fruits";

export class RemoteDeleteFruit implements DeleteFruit {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient,
  ) {}

  async delete({ id }: { id: string }): Promise<RemoteDeleteFruit.Response> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "delete",
      params: id,
    });

    const response = {
      success: httpResponse.succsess,
      message: httpResponse.message,
    };

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return response;

      case HttpStatusCode.unauthorized:
        throw new UnauthorizedError();

      default:
        throw new UnexpectedError();
    }
  }
}

namespace RemoteDeleteFruit {
  export type Response = DeleteResponseModel;
}
