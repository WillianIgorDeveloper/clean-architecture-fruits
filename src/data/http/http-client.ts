export type HttpMethod = "post" | "get" | "put" | "delete";

export type HttpRequest = {
  url: string;
  method: HttpMethod;
  body?: any;
  headers?: any;
  params?: string[];
};

export interface HttpClient<R = any> {
  request: ({ data }: { data: HttpRequest }) => Promise<HttpResponse<R>>;
}

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500,
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode;
  succsess: boolean;
  message: string;
  body?: T;
};
