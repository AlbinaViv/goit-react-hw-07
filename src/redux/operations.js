import axios from "axios";
import {
  fetchingError,
  fetchingInProgress,
  fetchingSuccess,
} from "./contacts/contacts.slice";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://65dd10c9e7edadead7ed646a.mockapi.io";

export const fetchContacts = () => async (dispatch) => {
  try {
    // Індикатор завантаження
    dispatch(fetchingInProgress()); // HTTP-запит
    const response = await axios.get("/contacts"); // Обробка даних
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    // Обробка помилки
    dispatch(fetchingError(e.message));
  }
};

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (text, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", { text });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "tasks/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
