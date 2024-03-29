import { mainApi } from "../../../config/mainApi";
import { createAsyncThunk } from "@reduxjs/toolkit";
import LocalStorageService from "../../../services/localStorageService";

const signInRequest = (body) => mainApi.post("/auth/signIn", body);

export const signInThunk = createAsyncThunk(
  "auth/signInRequest",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await signInRequest(payload);
      const { accessToken, ...profileData } = data;
      console.log(accessToken);
      LocalStorageService.saveToken(accessToken);
      return profileData;
    } catch (error) {
      console.log(`hoi`);
      return rejectWithValue(error.response.data.message);
    }
  }
);
