import { createReducer } from '@reduxjs/toolkit';
import { getTickersSuccess, deleteTickersSuccess } from './tickers-actions';

const initialState = {};

const tickersReducers = createReducer(initialState, {
  [getTickersSuccess]: (_, { payload }) => payload,
  [deleteTickersSuccess]: (state, { payload }) =>
    state.filter(({ ticker }) => ticker !== payload),
});

const reducers = {
  tickersReducers,
};

export default reducers;
