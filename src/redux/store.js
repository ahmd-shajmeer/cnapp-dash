import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from "./slices/categoriesSlice";
import widgetFormSlice from "./slices/widgetFormSlice";
import searchSlice from "./slices/searchSlice";

export default configureStore({
  reducer: {
    search: searchSlice,
    categories: categoriesSlice,
    widgetForm: widgetFormSlice
  }
})