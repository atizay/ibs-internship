import axios from "axios";
import {ApiRegions} from "./regions";
import {ApiExperiences} from "./experiences";
import {ApiItems} from "./items";

class Api {
  constructor(axios) {
    this.axios = axios;
    this.regions = new ApiRegions(axios);
    this.experiences = new ApiExperiences(axios);
    this.items = new ApiItems(axios);
  }
}
//главный объект для запросов
let API;
const createAPI = (headers = {}) => {
  API = new Api(
    axios.create({
      withCredentials: false,
      baseURL: "http://localhost:3014",
      headers,
      // headers: {
      //   //  "Authorization": "API_KEY"
      // },
    })
  );
};
createAPI({});

export { API, createAPI };

export const HTTP_STATUS = {
  AppError: 100,
  ServerError: 500,
  Access: 200,
  Error: 400,
  Unauthorized: 401,
  Forbidden: 403,
  BadRequest: 400,
  NotFound: 404,
}
