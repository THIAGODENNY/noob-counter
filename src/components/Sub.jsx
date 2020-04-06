import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Sub = () => {
  const { counter1, counter2 } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [sub1, sub2] = [() => dispatch({ type: 'DECREMENT_1' }), () => dispatch({ type: 'DECREMENT_2' })];

  return (
    <div>
      <Link to="/add">Go to Add</Link>
      <h1>{counter1}</h1>
      <button type="button" onClick={sub1}>Sub</button>
      <h1>{counter2}</h1>
      <button type="button" onClick={sub2}>Sub</button>
    </div>
  );
};


export default Sub;
