import {
  TEST_PASSING_ADD_ELEMENT,
  TEST_PASSING_SET_ACTIVE_ELEMENT_INDEX
} from "../actions/test-passing";

const initialState = {
  elements: {
    data: {},
    active: 0,
    length: 0
  },
  settings: {
    interval: 5000
  }
};

export const testPassingReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_PASSING_ADD_ELEMENT: {
      return {
        ...state,
        elements: {
          ...state.elements,
          data: { ...state.elements.data, ...action.element },
          length: state.elements.length + 1
        }
      };
    }
    case TEST_PASSING_SET_ACTIVE_ELEMENT_INDEX: {
      return {
        ...state,
        elements: {
          ...state.elements,
          active: action.index
        }
      };
    }
    default: {
      return state;
    }
  }
};
