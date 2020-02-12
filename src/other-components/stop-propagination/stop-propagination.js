import React from "react";
import PropTypes from "prop-types";
import PseudoBtn from "../pseudo-button/pseudo-button";

const StopPropagination = ({ children, ...props }) => (
  <PseudoBtn {...props} onClick={e => e.stopPropagation()}>
    {children}
  </PseudoBtn>
);

StopPropagination.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
};

export default StopPropagination;
