import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders
} from "axios";

export enum RequestMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE"
}

export interface ApiRequest<T> {
  url: string;
  method: RequestMethod;
  body?: T;
}

class AxiosConfig {
  private _baseUrl = "https://api.coingecko.com/api/v3/";
  private _headerConfigs?: AxiosRequestHeaders;
  private _configs: AxiosRequestConfig = {
    baseURL: this._baseUrl,
    timeout: 60000,
    headers: this._headerConfigs
  };
  private _instance?: AxiosInstance;

  public get headerConfigs() {
    return this._headerConfigs;
  }

  public set headerConfigs(hConfigs) {
    this._headerConfigs = hConfigs;
  }

  public get axiosInstance() {
    return this._instance;
  }

  constructor() {
    // create a new axios instance and assign to property
    this._instance = axios.create(this._configs);
    this._headerConfigs = this._configs.headers;

    // intercept request and run and action
    // request will not run if this fails
    this._instance?.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // intercept response and handle the data
    this._instance?.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
}

export default AxiosConfig;
