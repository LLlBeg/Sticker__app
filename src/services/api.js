import axios from "axios";

const baseURL = `https://62fbb65ee4bcaf53518b8e26.mockapi.io/stickers`;

export const getStickers = () => {
  return axios.get(baseURL);
};

export const addSticker = (sticker) => {
  if (sticker) return axios.post(baseURL, sticker);
  return Promise.reject("Stickers not found");
};

export const updateSticker = (id, description) => {
  if (id) return axios.put(`${baseURL}/${id}`, { description });
  return Promise.reject("Stikers not found from id");
};

export const removeSticker = (id) => {
  if (id) return axios.delete(`${baseURL}/${id}`);
  return Promise.reject("Stikers not found from id");
};
