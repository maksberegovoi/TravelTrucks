import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = ({ customNames = {} }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(x => x);

  if (pathnames.length === 0) return null;

  const formatLabel = segment => {
    if (customNames[segment]) {
      return customNames[segment];
    }

    return segment
      .replace(/[-_]/g, " ")
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <nav aria-label="Breadcrumb" className="myContainer py-4 bg-gray-50">
      <ol className="flex items-center space-x-2 text-sm">
        <li className="flex items-center">
          <Link
            to="/"
            className="flex items-center text-gray-600 hover:text-[var(--color-accent)] transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </Link>
        </li>

        {pathnames.map((segment, index) => {
          const path = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={path} className="flex items-center">
              <svg
                className="w-4 h-4 text-gray-400 mx-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              {isLast ? (
                <span className="text-gray-900 font-medium">{formatLabel(segment)}</span>
              ) : (
                <Link
                  to={path}
                  className="text-gray-600 hover:text-[var(--color-accent)] transition-colors"
                >
                  {formatLabel(segment)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
