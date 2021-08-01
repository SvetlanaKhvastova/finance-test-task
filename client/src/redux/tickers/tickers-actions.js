import { createAction } from '@reduxjs/toolkit';

const getTickersRequest = createAction('tickers/getTickersRequest');
const getTickersSuccess = createAction('tickers/getTickersSuccess');
const getTickersError = createAction('tickers/getTickersError');

const deleteTickersRequest = createAction('tickers/deleteTickersRequest');
const deleteTickersSuccess = createAction('tickers/deleteTickersSuccess');
const deleteTickersError = createAction('tickers/deleteTickersError');

export {
  getTickersRequest,
  getTickersSuccess,
  getTickersError,
  deleteTickersRequest,
  deleteTickersSuccess,
  deleteTickersError,
};
