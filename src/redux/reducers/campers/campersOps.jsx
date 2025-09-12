import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../../utils/consts.js";

axios.defaults.baseURL = API_URL;

export const fetchCampers = createAsyncThunk("campers/fetchAll", async () => {
  const response = await axios.get("/campers");
  return response.data;
});

export const fetchCamperById = createAsyncThunk("campers/fetchById", async id => {
  const response = await axios.get(`/campers/${id}`);
  return response.data;
});
