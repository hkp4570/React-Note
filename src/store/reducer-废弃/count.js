import {actionsType} from '../action/count';
export default function (state = 10, action) {
  switch (action.type) {
    case actionsType.increase:
      return state + 1;
    case actionsType.decrease:
      return state - 1;
    default:
      return state;
  }
}
