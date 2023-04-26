import { mainApi } from "../../../config/mainApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

const signInRequest = (body) => mainApi.post("/auth/signIn", body);

export const signInThunk = createAsyncThunk(
  "auth/signIn",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await signInRequest(payload);
      const { accessToken, ...profileData } = data;
      // LocalStorageService.saveToken(accessToken);
      return profileData;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
