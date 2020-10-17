import { UPDATE_STATE } from "../actions";

const initialState = [
  { title: "Portugal", list: [] },
  { title: "Nicaragua", list: [] },
  { title: "Marshall Islands", list: [] },
];

export default function changingComponent(state = initialState, action) {
  switch (action.type) {
    case UPDATE_STATE: {
      let object = [...state];
      for (let item of object) {
        if (item.title === action.place) {
          if (action.checked === true) {
            if (!item.list.includes(action.value)) {
              item.list.push(action.value);
            }
          } else {
            let index = item.list.indexOf(action.value);
            if (index !== -1) {
              item.list.splice(index, 1);
            }
          }
        }
      }
      return object;
    }
    default: {
      return state;
    }
  }
}
