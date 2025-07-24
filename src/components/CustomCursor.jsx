import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorOuterRef = useRef(null);
  const cursorInnerRef = useRef(null);

  const endX = useRef(0);
  const endY = useRef(0);
  const _x = useRef(0);
  const _y = useRef(0);

  useEffect(() => {
    const moveMouse = (e) => {
      endX.current = e.clientX;
      endY.current = e.clientY;

      if (cursorInnerRef.current) {
        cursorInnerRef.current.style.left = `${e.clientX}px`;
        cursorInnerRef.current.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener('mousemove', moveMouse);

    return () => {
      document.removeEventListener('mousemove', moveMouse);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      _x.current += (endX.current - _x.current) * 0.1;
      _y.current += (endY.current - _y.current) * 0.1;

      if (cursorOuterRef.current) {
        cursorOuterRef.current.style.left = `${_x.current}px`;
        cursorOuterRef.current.style.top = `${_y.current}px`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <>
      <div className="cursor-outer" ref={cursorOuterRef} />
      <div className="cursor-inner" ref={cursorInnerRef} />
    </>
  );
};

export default CustomCursor;
