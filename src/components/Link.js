import React from 'react';

const Link = ({ onClick, children, active }) => (
  <button
    onClick={onClick}
    disabled={active}
  >
    {children}
  </button>
);

export default Link;
