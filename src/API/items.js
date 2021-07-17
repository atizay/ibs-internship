export class ApiItems {

  constructor(axios) {
    this.axios = axios;
  }
  getAll = (dataForm) =>
    this.axios
      .post(`/items`, dataForm)
      .then((d) => d.data);
}