import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { wrapper } from '../../redux/store';
import { fetchProductsBegin } from '../../redux/actions/ResultsActions'


function Results() {

  // react-redux 7.1 用 useDispatch 和 useSelector 取代 connect
  const dispatch = useDispatch();
  const results = useSelector(state => state.results);
  // useSelector 從 Redux 的 store 拿到 state

  console.warn(results);

  return (
    <div>
      <div>{results ? JSON.stringify(results) : '暫無資料'}</div>
      <button type="button" onClick={() => { dispatch(fetchProductsBegin()); }}>
        獲得資料
      </button>
    </div>
  );
}

export default Results;