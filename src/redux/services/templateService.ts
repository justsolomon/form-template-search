import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Template } from 'types/global';
import { baseUrl } from 'utils/config';

const templateApi = createApi({
  reducerPath: 'templateApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    fetchTemplates: builder.query<Template[], void>({
      query: () => `/public/task_templates`,
    }),
  }),
});

export const { useFetchTemplatesQuery } = templateApi;

export default templateApi;
