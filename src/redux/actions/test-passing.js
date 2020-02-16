export const TEST_PASSING_ADD_ELEMENT = "TEST_PASSING_ADD_ELEMENT";
export const TEST_PASSING_SET_ACTIVE_ELEMENT_INDEX =
  "TEST_PASSING_SET_ACTIVE_ELEMENT_INDEX";

export const addTestPasingElement = element => ({
  type: TEST_PASSING_ADD_ELEMENT,
  element
});

export const setTestPasingActiveElementIndex = index => ({
  type: TEST_PASSING_SET_ACTIVE_ELEMENT_INDEX,
  index
});
