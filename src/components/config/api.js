import axios from "axios";


export const API = axios.create({
    baseURL: "http://52.74.166.134:3000/api/",
  });