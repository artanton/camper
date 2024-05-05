import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6634e6779bb0df2359a32014.mockapi.io";

export const fetchData = createAsyncThunk(
    "adverts/fetchAll",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/adverts");
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );


  
  export const getCamper = createAsyncThunk(
    "adverts/getCamper",
    async (Id, thunkAPI) => {
      try {
        const response = await axios.get(`/adverts/${Id}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );