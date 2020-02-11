import React, { useRef, useEffect, useState } from "react";
import "./styles.css";
import { testsData } from "./test.json";
import { Item } from "./test-components/item";
import { addListeners, removeListeners } from "./functions";
import { Timeline } from "./other-components/time-line";

const INTERVAL_TIME = 5000;

export default () => {
  const [index, setIndex] = useState(0);
  const [checked, setChecked] = useState();
  const refsArr = useRef({});
  const listener = useRef();

  useEffect(() => {
    removeListeners(["click", "keypress"], document, listener.current);
    listener.current = () => refsArr.current[index].current.click();
    addListeners(["click", "keypress"], document, listener.current);
  }, [index]);

  useEffect(() => {
    const id = setInterval(() => {
      index < 2 ? setIndex(i => index + 1) : setIndex(0);
      // console.log(refsArr.current[index].current);
    }, INTERVAL_TIME);
    console.log(index);
    return () => clearInterval(id);
  }, [index]);

  console.log("checked", checked);
  return (
    <>
      <Timeline
        key={index}
        style={{ animationDuration: `${INTERVAL_TIME}ms` }}
      />
      {Object.values({
        ...testsData,
        [index]: { ...testsData[index], active: true },
        ...(checked !== undefined
          ? { [checked]: { ...testsData[checked], checked: true } }
          : {})
      }).map(item => (
        <Item
          key={item.id}
          {...item}
          refsArr={refsArr}
          setCheckedHandler={setChecked}
        />
      ))}
    </>
  );
};
