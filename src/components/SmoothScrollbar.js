import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollBar from 'react-smooth-scrollbar';

export default function SmoothScrollbar({
    children}) {
      const {pathname} = useLocation();
    const ref = useRef(null);
    

useEffect(()=>{
    const {scrollbar}= ref.current;
    scrollbar.setPosition(0,0);
}, [pathname])

  return (
    <ScrollBar ref={ref} damping='.08'>
      {children}
    </ScrollBar>
  );
}
