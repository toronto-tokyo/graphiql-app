import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BASE_API_LINK, QUERY_TEMPLATE } from '../../shared/constants';

type InitialState = {
  apiLink: string;
  query: string;
};

const initialState: InitialState = {
  apiLink: BASE_API_LINK,
  query: QUERY_TEMPLATE,
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
  },
});

export default GraphQLSlice.reducer;
export const { setApiLink, setQuery } = GraphQLSlice.actions;
