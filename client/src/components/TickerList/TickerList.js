import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';

import { Operations } from '../../redux/tickers';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export default function TickerList({ tickers }) {
  const dispatch = useDispatch();

  const onRemoveTicker = id => {
    dispatch(Operations.deleteTickers(id));
  };

  return (
    <ul className="tickerList">
      {tickers.map(el => {
        return (
          <li key={v4()} className="tickerLink">
            <div className="flexbox">
              <span className="arrow">
                {(+el.price - +el.change).toFixed(2) > 0 ? (
                  <svg
                    focusable="false"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    className={
                      (+el.price - +el.change).toFixed(2) > 0
                        ? 'arrowUp'
                        : 'arrowDown'
                    }
                  >
                    <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
                  </svg>
                ) : (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    focusable="false"
                    className={
                      (+el.price - +el.change).toFixed(2) > 0
                        ? 'arrowUp'
                        : 'arrowDown'
                    }
                  >
                    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
                  </svg>
                )}
              </span>

              <div className="price">
                <p>{el.ticker}</p>
                <span className="spanPrice">{el.price}</span>
              </div>

              <div className="change">
                <span
                  className={
                    (+el.price - +el.change).toFixed(2) > 0 ? 'green' : 'red'
                  }
                >
                  {el.change_percent} %
                </span>

                <span
                  className={
                    (+el.price - +el.change).toFixed(2) > 0 ? 'green' : 'red'
                  }
                >
                  {el.change}
                </span>
              </div>

              <div className="deleteIconM">
                <DeleteForeverIcon onClick={() => onRemoveTicker(el.ticker)} />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
