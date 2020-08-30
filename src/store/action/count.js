export const actionsType = {
  'increase': Symbol('increase'),
  'decrease': Symbol('decrease'),
  'asyncIncrease': Symbol('asyncIncrease'),
  'asyncDecrease': Symbol('asyncDecrease'),
  'autoIncrease': Symbol('autoIncrease'),
  'stopAutoIncrease': Symbol('stopAutoIncrease'),
}

export function autoIncrease() {
  return {
    type: actionsType.autoIncrease,
  }
}

export function stopAutoIncrease() {
  return {
    type: actionsType.stopAutoIncrease,
  }
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
