import { AxiosError, AxiosResponse } from "axios";
import { MeterHTMLAttributes } from "react";

export interface MetaResponse {
  current_page: number;
  from: number;
  last_page: number;
  links: {
    url?: string;
    label: string;
    active: boolean;
  }[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface LinkResponse {
  first?: string;
  last?: string;
  prev?: string;
  next?: string;
}

export interface BaseResponse<T> {
  data: T;
  links: LinkResponse;
  meta: MetaResponse;
}

export type SuccessResponse<T> = AxiosResponse<BaseResponse<T>>;
export type ErrorResponse = AxiosError;
