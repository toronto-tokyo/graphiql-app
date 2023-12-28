import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  UnknownAction,
} from '@reduxjs/toolkit';
import { BASE_API_LINK, QUERY_TEMPLATE } from '../../shared/constants';

type InitialState = {
  apiLink: string;
  query: string;
  jsonViewer: string;
  error: null | string;
  variables: string;
};

const initialState: InitialState = {
  apiLink: BASE_API_LINK,
  query: QUERY_TEMPLATE,
  jsonViewer: '',
  error: null,
  variables: '',
};

type FetchJSONParams = {
  url: string;
  query: string;
  variables: string;
};

export const fetchJSON = createAsyncThunk<
  string,
  FetchJSONParams,
  { rejectValue: string }
>(
  'GraphQLSlice/fetchJSON',
  async ({ url, query, variables }, { rejectWithValue }) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(
          variables
            ? {
                query,
                variables: JSON.parse(variables),
              }
            : {
                query,
              }
        ),
      });
      if (!response.ok) {
        const message = (await response.json()).errors[0].message as string;
        return rejectWithValue(message);
      }
      const data = await response.json();
      return JSON.stringify(data, null, 4);
    } catch (error) {
      return rejectWithValue('Something went wrong!');
    }
  }
);

const isError = (action: UnknownAction) => {
  return action.type.endsWith('rejected');
};

const GraphQLSlice = createSlice({
  name: 'GraphQL',
  initialState,
  reducers: {
    setApiLink(state, action: PayloadAction<string>) {
      state.apiLink = action.payload;
    },
    setQuery(state, action: PayloadAction<string>) {
      console.log(action.payload);
      state.query = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    setVariables(state, action: PayloadAction<string>) {
      state.variables = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJSON.fulfilled, (state, action) => {
        state.jsonViewer = action.payload;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        console.log(state.error);
      });
  },
});

export default GraphQLSlice.reducer;
export const { setApiLink, setQuery, setError, setVariables } =
  GraphQLSlice.actions;
