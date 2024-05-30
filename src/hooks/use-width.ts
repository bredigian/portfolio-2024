import { useState } from 'react';

export const useWidth = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 40) setScrolled(true);
    else setScrolled(false);
  };

  return {
    scrolled,
    handleScroll,
  };
};
