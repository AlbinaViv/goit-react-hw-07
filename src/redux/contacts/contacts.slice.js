import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContactAction: (state, { payload }) => {
      state.items = [...state.items, payload];
    },
    deleteContactAction: (state, { payload }) => {
      state.items = state.items.filter((contact) => contact.id !== payload);
    },
  },
});

export const { addContactAction, deleteContactAction } = contactsSlice.actions;

const persistConfig = {
  key: "contacts",
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
