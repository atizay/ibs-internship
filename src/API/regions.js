export class ApiRegions {

  constructor(axios) {
    this.axios = axios;
  }
  getAll = () =>
    this.axios
      .get(`/regions`)
      .then((d) => d.data);
}
