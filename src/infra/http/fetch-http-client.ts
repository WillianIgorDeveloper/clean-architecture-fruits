import { HttpRequest, HttpClient, HttpResponse } from "@/data/http";

export class fetchHttpClient implements HttpClient {
  async request({ data }: { data: HttpRequest }): Promise<HttpResponse> {
    try {
      const params = data.params ? `/${data.params?.join("/")}` : "";

      const response = await fetch(`${data.url}${params}`, {
        method: data.method,
        body: data.body,
        headers: data.headers,
      });

      return {
        statusCode: response.status,
        succsess: response.ok,
        message: response.statusText,
        body: await response.json(),
      };
    } catch (error: any) {
      return {
        statusCode: 500,
        succsess: false,
        message: error.message,
      };
    }
  }
}
