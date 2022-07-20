import React, { useEffect, useRef } from 'react';
export default function CustomCursor() {
  const cursorRef = useRef(null);
  useEffect(() => {
    if (cursorRef.current == null || cursorRef == null) return;
    document.addEventListener('mousemove', (e) => {
      if (cursorRef.current == null) return;
      cursorRef.current.setAttribute(
        'style',
        'top: ' + e.pageY + 'px; left: ' + e.pageX + 'px;'
      );
    });
    document.addEventListener('click', () => {
      if (cursorRef.current == null) return;
      cursorRef.current.classList.add('expand');
      setTimeout(() => {
        if (cursorRef.current == null) return;
        cursorRef.current.classList.remove('expand');
      }, 500);
    });
    let links = document.getElementsByTagName('a');
    Object.values(links).forEach((link) => {
      link.addEventListener('mouseenter', () => {
        if (cursorRef.current == null) return;
        cursorRef.current.classList.add('clickable');
      });
      link.addEventListener('mouseleave', () => {
        if (cursorRef.current == null) return;
        // setTimeout(() => {
        cursorRef.current.classList.remove('clickable');
        // }, 1);
      });
    });
  }, []);
  return <div className='cursor' ref={cursorRef}></div>;
}
