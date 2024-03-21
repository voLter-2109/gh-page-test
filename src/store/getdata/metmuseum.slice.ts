import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IResponsePlaceholder } from "../../type/response-metmusem";
import { jsonplaceholderApi } from "./metmuseum.api";

const LS_FAV_KEY = "rfk";
const LS_POST_KEY = "lpk";

interface jsonplaceholderSliceState {
  favorites: number[];
  posts: IResponsePlaceholder[];
}

const initialState: jsonplaceholderSliceState = {
  favorites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? "[]"),
  posts: JSON.parse(localStorage.getItem(LS_POST_KEY) ?? "[]"),
};

export const jsonplaceholderSlice = createSlice({
  name: "jsonpSliceReducer",
  initialState: initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<number>) {
      state.favorites.push(action.payload);
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites));
    },
    removeFavorite(state, action: PayloadAction<number>) {
      state.favorites = state.favorites.filter((f) => f !== action.payload);
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites));
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      jsonplaceholderApi.endpoints.getPosts.matchFulfilled,
      (state, actions: PayloadAction<IResponsePlaceholder[]>) => {
        state.posts = actions.payload;
        localStorage.setItem(LS_POST_KEY, JSON.stringify(state.posts));
      }
    );
  },
});

export const jsonplaceholderSliceActions = jsonplaceholderSlice.actions;
export const jsonplaceholderSliceReduser = jsonplaceholderSlice.reducer;
