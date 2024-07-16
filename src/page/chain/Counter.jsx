import React, { useEffect, useRef } from 'react';

const Counter = ({ endValue, speed }) => {
  const counterRef = useRef(null);

  useEffect(() => {
    const counter = counterRef.current;
    let count = 0;
    const intervalSpeed = speed / endValue;

    function counterUp() {
      counter.textContent = count++;
      if (count > endValue) {
        clearInterval(stop);
      }
    }

    const stop = setInterval(counterUp, intervalSpeed);

    return () => clearInterval(stop); // Cleanup interval on component unmount
  }, [endValue, speed]);

  return <div ref={counterRef} className="counter">0</div>;
};



export default Counter;
