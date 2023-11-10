import requests from "./httpService";

const homeService = {
  getHome: async ({ page, limit }) => {
    return requests.get(`/homepage?page=${page}&limit=${limit}`);
  },
  postHome: async (body) => {
    return requests.post(`/homepage`, body);
  },
  deleteHome: async (body) => {
    return requests.post(`homepage/deletehomepage`,body);
  },
};
export default homeService;
