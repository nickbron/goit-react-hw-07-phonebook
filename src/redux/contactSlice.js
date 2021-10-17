import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61687f6c09e030001712bfea.mockapi.io/',
  }),
  tagTypes: ['contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/Contacts',
      providesTags: ['contact'],
    }),
    DeleteContact: builder.mutation({
      query: ContactId => ({
        url: `/Contacts/${ContactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contact'],
    }),
    CreateContact: builder.mutation({
      query: ({ name, phone }) => ({
        url: '/Contacts',
        method: 'POST',
        body: {
          name,
          phone,
        },
      }),
      invalidatesTags: ['contact'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} = contactApi;
