import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Add = () => {
  const { counter1, counter2 } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [add1, add2] = [() => dispatch({ type: 'INCREMENT_1' }), () => dispatch({ type: 'INCREMENT_2' })];

  return (
    <div>
      <Link to="/sub">Go to Sub</Link>
      <h1>{counter1}</h1>
      <button type="button" onClick={add1}>Add</button>
      <h1>{counter2}</h1>
      <button type="button" onClick={add2}>Add</button>
    </div>
  );
};

export default Add;
