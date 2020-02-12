import React from "react";

import styles from "./items-wrapper.module.scss";

export const ItemsWrapper = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);
