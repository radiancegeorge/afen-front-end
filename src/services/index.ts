import helper from "../constants/helper";
const Http = {
  get: async (jsonObj = {}, path = "") => {
    const url = `${
      process.env.REACT_APP_API_BASE_URL
    }${path}?${helper.serialize(jsonObj)}`;
    return callApi("GET", url);
  },
  post: async (formData: string = "", path = "") => {
    const url = process.env.REACT_APP_API_BASE_URL + path;
    return callApi("POST", url, JSON.stringify(formData));
  },
  put: async (formData = undefined, path = "", id: any = "") => {
    const url = `${process.env.REACT_APP_API_BASE_URL}${path}/${id}`;
    return callApi("PUT", url, JSON.stringify(formData));
  },
  delete: async (path = "", id: any = "") => {
    const url = `${process.env.REACT_APP_API_BASE_URL}${path}/${id}`;
    return callApi("DELETE", url);
  },
};

function callApi(method: string, path: string, formData: any = undefined) {
  return fetch(path, {
    method: method,
    body: formData,
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((apiRes: any) => {
      // on login session expire error
      return apiRes;
    })
    .then((jsonRes) => {
      return jsonRes;
    })
    .catch((err) => {
      console.log(err.toString());
    });
}
export default Http;
