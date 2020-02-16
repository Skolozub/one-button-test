import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { setTestPasingActiveElementIndex } from "../../redux/actions/test-passing";
import { removeListeners, addListeners } from "../../functions";

export const ElementsSwitcher = ({ children }) => {
  const dispatch = useDispatch();
  const elements = useSelector(({ testPassing }) => testPassing.elements);
  const switchElemenstInterval = useSelector(
    ({ testPassing }) => testPassing.settings.interval
  );

  const listener = useRef(() => {});

  useEffect(() => {
    const id = setInterval(() => {
      elements.active < elements.length - 1
        ? dispatch(setTestPasingActiveElementIndex(elements.active + 1))
        : dispatch(setTestPasingActiveElementIndex(0));
    }, switchElemenstInterval);

    return () => clearInterval(id);
  }, [dispatch, elements.active, elements.length, switchElemenstInterval]);

  useEffect(() => {
    removeListeners(["click", "keypress"], document, listener.current);

    const listenerFn = () => elements.data[elements.active].current.click();
    listener.current = listenerFn;

    addListeners(["click", "keypress"], document, listenerFn);

    return () =>
      removeListeners(["click", "keypress"], document, listener.current);
  }, [dispatch, elements.active, elements.data]);

  return children;
};
