import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Access the current path (e.g., /about, /packages)
  const { pathname } = useLocation();

  useEffect(() => {
    // Whenever the path changes, scroll the window to the top-left (0,0)
    window.scrollTo(0, 0);
  }, [pathname]); // This triggers every time the URL changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;