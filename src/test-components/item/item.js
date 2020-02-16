import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTestPasingElement } from "../../redux/actions/test-passing";

export const Item = ({ name, children }) => {
  const dispatch = useDispatch();
  const elements = useSelector(({ testPassing }) => testPassing.elements);
  const itemRef = useRef();

  useEffect(() => {
    dispatch(addTestPasingElement({ [name]: itemRef }));
  }, [dispatch, name]);

  return children({ forwardRef: itemRef, elements });
};
