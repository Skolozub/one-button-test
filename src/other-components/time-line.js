import React from "react";
import cn from "classnames";

import styles from "./timeline.module.scss";

export const Timeline = ({ className, style }) => (
  <div className={cn(className, styles.timeline)} style={style} />
);
