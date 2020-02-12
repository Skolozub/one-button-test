import React, { useRef, useEffect } from "react";
import cn from "classnames";
import PseudoBtn from "../../other-components/pseudo-button/pseudo-button";

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
    <PseudoBtn
      className={cn(
        styles.item,
        { [styles.withState]: active || checked },
        { [styles.active]: active },
        { [styles.checked]: checked }
      )}
      forwardRef={itemRef}
      onClick={onClickHandler}
    >
      <div className={styles.image}>{src}</div>
      <div className={styles.name}>{name}</div>
    </PseudoBtn>
  );
};
