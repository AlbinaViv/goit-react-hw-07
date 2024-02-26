import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contacts.slice";

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { filtersReducer } from "./filters/filters.slice";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    contacts: contactsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
