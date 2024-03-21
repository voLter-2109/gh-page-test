import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PostResponse } from "../../type/response-metmusem";
import concatText from "../../utils/concatText";

export const jsonplaceholderApi = createApi({
  reducerPath: "jsonApiEndpoint",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  refetchOnFocus: false,
  endpoints: (builder) => ({
    getPosts: builder.query<PostResponse[], void>({
      query: () => "/posts",
      transformResponse: (response: PostResponse[]) => {
        return response.map((post) => ({
          ...post,
          body: concatText(post.body),
          image: faker.image.urlLoremFlickr(),
        }));
      },
    }),
    getPost: builder.query<PostResponse, number>({
      query: (id) => `/posts/${id}`,
      transformResponse: (response: PostResponse) => {
        return {
          ...response,
          body: concatText(response.body),
        };
      },
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery } = jsonplaceholderApi;
