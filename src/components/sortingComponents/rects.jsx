import React, { useState } from 'react';
import Rect from './rect';
import FlipMove from 'react-flip-move';

const Rects = React.forwardRef((props, ref) => {
 let margin = 5;
 let width = 20;
  
  if (props.rects.length > 50) {
    margin = 1;
    width = 10;
  }

  return (
    <div>
      <FlipMove
        className="flex justify-center items-end"
        duration={props.speed}
        // easing="cubic-bezier(.12,.36,.14,1.2)"
      >
        {props.rects?.map((rect) => {
          return (
            <Rect
              marg={margin}
              w={width}
              key={rect.kk}
              rect={rect}
              ref={ref}
            />
          );
        })}
      </FlipMove>
    </div>
  );
});

export default Rects;
