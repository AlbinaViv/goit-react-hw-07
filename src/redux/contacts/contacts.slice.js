import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addContactAction: (state, { payload }) => {
      state.items = [...state.items, payload];
    },
    deleteContactAction: (state, { payload }) => {
      state.items = state.items.filter((contact) => contact.id !== payload);
    },
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  addContactAction,
  deleteContactAction,
} = contactsSlice.actions;

const persistConfig = {
  key: "contacts",
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
