export type EditResponseModel<T> = {
  success: boolean;
  message: string;
  body?: T;
};
