import React from "react";
import cn from "classnames";

import styles from "./timeline.module.scss";
import StopPropagination from "../stop-propagination/stop-propagination";

export const Timeline = ({ className, style }) => (
  <StopPropagination>
    <div className={cn(className, styles.timeline)} style={style}>
      <div className={styles.background} />
    </div>
  </StopPropagination>
);
