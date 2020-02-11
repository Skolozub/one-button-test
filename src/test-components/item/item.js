import React, { useRef, useEffect } from "react";
import cn from "classnames";

import styles from "./item.module.scss";

export const Item = ({
  id,
  name,
  src,
  active,
  checked,
  refsArr,
  setCheckedHandler
}) => {
  const itemRef = useRef();

  useEffect(() => {
    refsArr.current = { ...refsArr.current, [id]: itemRef };
  }, [refsArr, id]);

  const onClickHandler = () => {
    setCheckedHandler(id);
  };

  return (
    <div
      className={cn(
        styles.item,
        { [styles.withState]: active || checked },
        { [styles.active]: active },
        { [styles.checked]: checked }
      )}
      ref={itemRef}
      onClick={onClickHandler}
    >
      <img src={src} alt="" />
      {name}
    </div>
  );
};
