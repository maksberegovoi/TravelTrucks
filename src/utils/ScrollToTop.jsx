import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { publicRoutes } from "../routes/routes.js";

const parentPatterns = publicRoutes
  .filter(route => route.children)
  .map(route => {
    const pattern = route.path.replace(/:[^/]+/g, "([^/]+)");
    return new RegExp(`^${pattern}`);
  });

function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    const prevPathname = prevPathnameRef.current;

    const isSameParent = parentPatterns.some(regex => {
      const prevMatch = prevPathname.match(regex);
      const currentMatch = pathname.match(regex);
      return prevMatch && currentMatch && prevMatch[0] === currentMatch[0];
    });

    if (!isSameParent) {
      window.scrollTo(0, 0);
    }

    prevPathnameRef.current = pathname;
  }, [pathname]);

  return null;
}

export default ScrollToTop;
