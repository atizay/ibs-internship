export class ApiExperiences {

  constructor(axios) {
    this.axios = axios;
  }
  getAll = () =>
    this.axios
      .get(`/experiences`)
      .then((d) => d.data);
}
