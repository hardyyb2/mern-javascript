import axios from "axios";

const BASE_PATH =
  process.env.REACT_APP_BASE_URL || `http://localhost:3001/api/v1.1`;

class ClientLibrary {
  constructor() {
    this.basePath = BASE_PATH;
  }

  request(endpoint = "", options = {}) {
    let url = this.basePath + endpoint;
    let headers = {
      Accept: "application/json",
      "Content-type": "application/json",
    };

    let config = {
      ...options,
      headers,
    };

    return axios({
      url,
      ...config,
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        if (err.response?.data) {
          throw err.response.data;
        } else if (err.response) {
          throw err.response;
        } else {
          throw err;
        }
      });
  }

  getName(name) {
    const options = {
      method: "get",
    };

    return this.request(`/name/${name}`, options);
  }

  createName(name, age) {
    const options = {
      method: "post",
      data: JSON.stringify({ name, age }),
    };
    return this.request("/name", options);
  }

  updateName(name, { name: newName, age }) {
    const options = {
      method: "put",
      data: JSON.stringify({ name: newName, age }),
    };
    return this.request(`/name/${name}`, options);
  }

  deleteName(name) {
    const options = {
      method: "delete",
    };
    return this.request(`/name/${name}`, options);
  }
}

export default ClientLibrary;
