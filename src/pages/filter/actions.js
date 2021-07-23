import {SET_FILTER} from "./actionTypes";

export const setFilter = filterType => {
  return {
    type: SET_FILTER,
    filter: filterType
  }
}