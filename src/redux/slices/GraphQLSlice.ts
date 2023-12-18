import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BASE_API_LINK, QUERY_TEMPLATE } from '../../shared/constants';

type InitialState = {
  apiLink: string;
  query: string;
  jsonViewer: string;
};

const initialState: InitialState = {
  apiLink: BASE_API_LINK,
  query: QUERY_TEMPLATE,
  jsonViewer: '',
};

type FetchJSONParams = {
  url: string;
  query: string;
};

export const fetchJSON = createAsyncThunk<
  string,
  FetchJSONParams,
  { rejectValue: string }
>('GraphQLSlice/fetchJSON', async ({ url, query }, { rejectWithValue }) => {
  try {
    const request = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
    if (!request.ok) {
      rejectWithValue('Request Error!');
    }
    const data = await request.json();
    return JSON.stringify(data, null, 4);
  } catch (error) {
    return rejectWithValue('Something went wrong!');
  }
});

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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchJSON.fulfilled, (state, action) => {
      state.jsonViewer = action.payload;
    });
  },
});

export default GraphQLSlice.reducer;
export const { setApiLink, setQuery } = GraphQLSlice.actions;
