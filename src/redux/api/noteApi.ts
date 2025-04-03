import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";
import { INoteRequest, INoteResponse,INotesApiResponse } from "../../types";

export const noteApi = createApi({
  reducerPath: "noteApi",
  baseQuery: customFetchBase,
  tagTypes: ["Note"],
  endpoints: (builder) => ({
    createNote: builder.mutation<INoteResponse, INoteRequest>({
      query(values) {
        return {
          url: "/notes/",
          method: "POST",
          body: values,
        };
      },
      invalidatesTags: ["Note"],
    }),

    getNote: builder.query<INoteResponse[], string | undefined>({
      query(id) {
        return {
          url: `/notes/${id}`,
        };
      },
      providesTags: [{ type: "Note", id: "LIST" }],
      transformResponse: (response: INotesApiResponse) => response.data, 

    }),

    getNotes: builder.query<INoteResponse[], void>({
      query() {
        return {
          url: `/notes`,
        };
      },
      providesTags: [{ type: "Note", id: "LIST" }],
      transformResponse: (response: INotesApiResponse) => response.data, 
    }),

    updateNote: builder.mutation<INoteResponse, INoteRequest>({
      query(values) {
        return {
          url: `/notes/${values._id}`,
          method: "PUT",
          body: values,
        };
      },
      invalidatesTags: ["Note"],
    }),

    deleteNote: builder.mutation<{ success: boolean; id: string }, string>({
      query(id) {
        return {
          url: `/notes/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Note"],
    }),
  }),
});

export const {
  useCreateNoteMutation,
  useGetNoteQuery,
  useGetNotesQuery,
  useUpdateNoteMutation,
  useDeleteNoteMutation,
} = noteApi;
