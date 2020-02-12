import React, { useRef, useEffect, useState } from "react";
import { testsData } from "./test.json";
import { Item } from "./test-components/item/item";
import { addListeners, removeListeners } from "./functions";
import { Timeline } from "./other-components/timeline/timeline";
import { Cover } from "./test-components/cover/cover.js";
import { ItemsWrapper } from "./wrappers/items-wrapper/items-wrapper.js";

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
      index < 2 ? setIndex(i => i + 1) : setIndex(0);
    }, INTERVAL_TIME);

    return () => clearInterval(id);
  }, [index]);

  return (
    <>
      <Cover />
      <Timeline
        key={index}
        style={{ animationDuration: `${INTERVAL_TIME}ms` }}
      />
      <ItemsWrapper>
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
      </ItemsWrapper>
    </>
  );
};
