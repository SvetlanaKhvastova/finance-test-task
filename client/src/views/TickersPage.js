import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Selectors } from '../redux/tickers';
import { Operations } from '../redux/tickers';

import TickerList from '../components/TickerList';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import tickerss from '../tic.json';

export default function TickersPage() {
  const tickers = useSelector(Selectors.getAllTickers);
  console.log(`tickers`, tickers);

  const [showResults, setShowResults] = useState(true);
  const TickersVisibility = () => setShowResults(!showResults);

  const [ticker, setTicker] = useState({});

  const [time, setTime] = useState(5000);
  const setTimeInterval = value => {
    setTime(value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(Operations.getTickers());
      setTicker(ticker);
    }, time);
    return () => clearInterval(timer);
  }, [ticker, time, dispatch]);

  return (
    <>
      {/* <TickerList tickers={tickerss} /> */}

      {tickers.length > 0 ? (
        <div>
          <Button
            variant="contained"
            color="secondary"
            onClick={TickersVisibility}
          >
            Show / Hide
          </Button>
          {showResults ? <TickerList tickers={tickers} /> : null}

          {showResults ? (
            <Button
              variant="contained"
              color="primary"
              onClick={() => setTimeInterval(Number(prompt()))}
            >
              Change the delay time in ms
            </Button>
          ) : null}
        </div>
      ) : (
        <CircularProgress color="secondary" />
      )}
    </>
  );
}
