import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID bYpW32fZGI-YptdziJC7Q34tYYhaoCgpg0-hr7utyws",
  },
});
