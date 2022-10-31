import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { routes, pdfLink } from "./constants";

export function Routes({ selectedRoute, changeRoute }) {
  return Object.values(routes).map((page) => {
    const isSelected = page.route === selectedRoute;

    return (
      <div className={`m-2 ${isSelected && "flex items-center justify-center border-r-[1px] border-b-[1px] -mr-[9px] border-black"}`}>
        {page.route === routes.RESOURCES.route ? (
            <div className={routeContainer}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={link}
            href={pdfLink}
          >
            Resources
          </a>
          </div>
        ) : (
          <div
            key={page.route}
            className={routeContainer}
            onClick={() => changeRoute(page.route)}
          >
            <Link
              to={page.route}
              style={{ ...link }}
            >
              {page.label}
            </Link>
          </div>
        )}
      </div>
    );
  });
}

export default function Nav() {
  const { pathname } = useLocation();
  const [selectedRoute, changeRoute] = useState(pathname);
  const routesProps = { selectedRoute, changeRoute };

  return (
    <div className={container}>
      <div className={defaultFlex}>
        <Routes {...routesProps} />
      </div>
    </div>
  );
}

const defaultFlex = "flex flex-col justify-center items-end";
const container = defaultFlex + "h-full w-[300px]";
const routeContainer =
  "flex flex-col items-end w-full text-sm pb-1 pl-1 m-2 first:mt-0 cursor-pointer";
const link = {
  textDecoration: "none",
  color: "inherit",
};
