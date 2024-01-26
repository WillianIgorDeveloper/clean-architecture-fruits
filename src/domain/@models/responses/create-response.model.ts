export type CreateResponseModel<T> = {
  success: boolean;
  message: string;
  body?: T | null;
};
