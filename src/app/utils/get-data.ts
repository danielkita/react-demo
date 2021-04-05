import { mockFetch, ServerResponse } from "../../back-end/server";

interface Response<T> extends ServerResponse {
  body: T;
}

export const getData = async <T>(endpoint: string) => {
  let response;
  try {
    response = await ((mockFetch(endpoint) as unknown) as Promise<Response<T>>);
  } catch (e) {
    return {
      error: e.message,
      response: undefined,
    };
  }
  return { response };
};
