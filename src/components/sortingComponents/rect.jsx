import React, { forwardRef } from 'react';
import './style.css';

const Rect = ({ rect, marg, w }, ref) => {
  const checkColor = () => {
    if (rect.isSorted) {
      return "green";
    } else if (rect.isSorting) {
      return "red";
    } else {
      return "black";
    }
  };

  return (
    <div
      className='rect'
      style={{
        height: rect.width,
        width: w,
        background: checkColor(),
        margin: marg,
        verticalAlign: 'middle',
      }}
      ref={ref}
    ></div>
  );
};

export default forwardRef(Rect);