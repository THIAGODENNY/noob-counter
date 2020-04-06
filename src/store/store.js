import { createStore } from 'redux';

function counter(state = {
  counter1: 0,
  counter2: 0,
  counter3: 20,
}, action) {
  switch (action.type) {
    case 'INCREMENT_1':
      return { ...state, counter1: state.counter1 + 1 };
    case 'DECREMENT_1':
      return { ...state, counter1: state.counter1 - 1 };
    case 'INCREMENT_2':
      return { ...state, counter2: state.counter2 + 1 };
    case 'DECREMENT_2':
      return { ...state, counter2: state.counter2 - 1 };
    default:
      return state;
  }
}

const store = createStore(counter);

export default store;
