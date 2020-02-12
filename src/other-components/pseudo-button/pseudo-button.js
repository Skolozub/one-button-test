import React from "react";
import PropTypes from "prop-types";

const PseudoBtn = ({ children, onClick, forwardRef, ...props }) => (
  <div
    {...props}
    tabIndex={0}
    role="button"
    ref={forwardRef}
    onKeyPress={event => {
      if (event.keyCode === 13) onClick(event);
    }}
    onClick={onClick}
  >
    {children}
  </div>
);

PseudoBtn.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  onClick: PropTypes.func
};

export default PseudoBtn;
