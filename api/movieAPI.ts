import api from "./api";
import { ApiRequestConfig } from "../type/api-type";

const MAIN_URL = "/movie";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getMoviePopular = (config: ApiRequestConfig = {}) =>
  api
    .get(
      `${MAIN_URL}/popular?api_key=${API_KEY}`,
      config
    )
    .then((res) => res.data);

export const getMovieNow = (config: ApiRequestConfig = {}) =>
api
  .get(
    `${MAIN_URL}/now_playing?api_key=${API_KEY}`,
    config
  )
  .then((res) => res.data);

  export const getMovieUpcoming = (config: ApiRequestConfig = {}) =>
  api
    .get(
      `${MAIN_URL}/upcoming?api_key=${API_KEY}`,
      config
    )
    .then((res) => res.data);