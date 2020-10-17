export const UPDATE_STATE = "UPDATE_STATE";

export function updateState(value, place, checked) {
  return {
    type: UPDATE_STATE,
    value,
    place,
    checked,
  };
}
