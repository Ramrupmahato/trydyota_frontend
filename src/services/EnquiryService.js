import requests from "./httpService";

const EnquiryService = {
  getEnquiry: async ({ page, limit }) => {
    return requests.get(`/productRequest?page=${page}&limit=${limit}`);
  },
  postEnquiryStatus: async (body) => {
    return requests.post(`/productRequest/statuschange`, body);
  },
  getEnquiryById: async (id) => {
    return requests.get(`shippingmethodbyid?id=${id}`);
  },
  deleteEnquiry: async (id) => {
    return requests.delete(`/shipping/deleteshippingmethod/${id}`);
  },
};
export default EnquiryService;