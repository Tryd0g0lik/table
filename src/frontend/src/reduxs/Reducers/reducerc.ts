import { F } from "@Interfaces";

const map = new Map();
map.clear();

// const userStete: PositionsCard['order'] = [] as unknown as (PositionsCard['order']);

function table(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

export default orderReducer;
