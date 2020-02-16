import React from "react";
import { useSelector } from "react-redux";
import { Timeline } from "../../other-components/timeline/timeline";

export const ConnectedTimeline = () => {
  const key = useSelector(({ testPassing }) => testPassing.elements.active);
  const settings = useSelector(({ testPassing }) => testPassing.settings);

  return (
    <Timeline
      key={key}
      style={{ animationDuration: `${settings.interval}ms` }}
    />
  );
};
