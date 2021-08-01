const getAllTickers = state => {
  return state.tickers.tickers;
};

const deleteTicker = state => {
  return state.tickers.filter;
};

export { getAllTickers, deleteTicker };
