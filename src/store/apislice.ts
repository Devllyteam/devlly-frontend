import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiResponse } from "../types/apiResponse";
import { ResponseCode } from "../types/responseCode";

// Define a generic type for the API data
type ApiData = Record<string, unknown>;

// Define a generic type for the API response
type ApiResponseType<T extends ApiData = ApiData> = ApiResponse<T>;

// Create the API slice
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  endpoints: (builder) => ({
    fetchData: builder.query<ApiResponseType, string>({
      query: (url) => url,
    }),
  }),
});

// Export the auto-generated hook for the `fetchData` endpoint
export const { useFetchDataQuery } = api;

// Define the state interface
interface ApiState {
  response: ApiResponseType | null;
  loading: boolean;
  error: string | null;
}

// Define the initial state
const initialState: ApiState = {
  response: null,
  loading: false,
  error: null,
};

// Create the slice for additional state management
const apiSlice = createSlice({
  name: "apiState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(api.endpoints.fetchData.matchPending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(
        api.endpoints.fetchData.matchFulfilled,
        (state, action: PayloadAction<ApiResponseType>) => {
          state.response = action.payload;
          state.loading = false;
        }
      )
      .addMatcher(api.endpoints.fetchData.matchRejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch data";
        state.response = new ApiResponse(
          ResponseCode.SERVER_ERROR_INTERNAL,
          {},
          state.error
        );
      });
  },
});

// Export the reducer
export const apiReducer = apiSlice.reducer;

// Define RootState type
type RootState = ReturnType<typeof apiReducer>;

// Selectors
export const selectApiResponse = (state: RootState) => state.response;
export const selectApiLoading = (state: RootState) => state.loading;
export const selectApiError = (state: RootState) => state.error;

