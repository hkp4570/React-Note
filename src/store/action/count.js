export const actionsType = {
  'increase': Symbol('increase'),
  'decrease': Symbol('decrease'),
  'asyncIncrease': Symbol('asyncIncrease'),
  'asyncDecrease': Symbol('asyncDecrease'),
}

export function createIncreaseAction () {
  return {
    type: actionsType.increase
  }
}
export function createDecreaseAction () {
  return {
    type: actionsType.decrease
  }
}
export function createAsyncIncreaseAction () {
  return {
    type: actionsType.asyncIncrease
  }
}
export function createAsyncDecreaseAction () {
  return {
    type: actionsType.asyncDecrease
  }
}
