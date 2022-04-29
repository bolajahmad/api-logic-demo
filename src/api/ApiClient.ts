import React, { ReactText } from "react";
import AxiosConfig from "./AxiosConfig";

export enum RequestMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE"
}

export interface ApiRequest<T = any> {
  body?: T;
  query?: Record<string, ReactText>;
  model?: T;
}

export enum HttpMethods {
  Get = "GET",
  Post = "POST",
  Patch = "PATCH",
  Delete = "DELETE",
  Put = "PUT"
}

const axios = new AxiosConfig();

export class ApiClient {
  private static async request<ResponseType = any, RequestType = any>(
    method: HttpMethods,
    endpoint: string,
    request?: ApiRequest<RequestType>
  ) {
    if (request?.query) {
      const query = Object.entries(request.query)
        .filter(([, value]) => typeof value !== "undefined")
        .map(([field, value]) => field + "=" + value)
        .join("&");
      endpoint += query ? "?" + query : "";
    }

    if (!axios.axiosInstance) {
      return null;
    }
    return await axios
      .axiosInstance({
        method,
        url: endpoint,
        data: request?.body
      })
      .then(({ data }) => {
        return data as ResponseType;
      });
  }

  public static get<T>(endpoint: string, query: Record<string, ReactText>) {
    return this.request<T>(HttpMethods.Get, endpoint, { query })!;
  }

  public static post<RequestType, ResponseType = any>(
    endpoint: string,
    body?: RequestType
  ) {
    return this.request<ResponseType>(HttpMethods.Post, endpoint, { body })!;
  }
}
