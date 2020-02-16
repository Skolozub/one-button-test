import React from "react";
import cn from "classnames";
import PseudoBtn from "../pseudo-button/pseudo-button";

import styles from "./card.module.scss";

export const Card = ({
  id,
  forwardRef,
  text,
  image,
  active,
  checked,
  onClickHandler
}) => (
  <PseudoBtn
    forwardRef={forwardRef}
    className={cn(
      styles.item,
      { [styles.withState]: active || checked },
      { [styles.active]: active },
      { [styles.checked]: checked }
    )}
    onClick={onClickHandler}
  >
    <div className={styles.image}>{image}</div>
    <div className={styles.text}>{text}</div>
  </PseudoBtn>
);
