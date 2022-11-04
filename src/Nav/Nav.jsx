import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { routes, pdfLink, repoLink } from "./constants";

export function Routes({ selectedRoute, changeRoute }) {
  return Object.values(routes).map((page, i) => {
    const isSelected = page.route === selectedRoute;

    return (
      <div
        key={i}
        className={`m-2 flex items-center justify-center font-bold ${
          isSelected && "-mr-[10px] italic"
        }`}
      >
        <div
          key={page.route}
          className={routeContainer}
          onClick={() => changeRoute(page.route)}
        >
          <Link to={page.route} style={{ ...link }}>
            {page.label}
          </Link>
        </div>
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
        <div className={routeContainer}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className='text-[10px] hover:underline'
            href={repoLink}
          >
            [site source code]
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className='text-[10px] hover:underline'
            href={pdfLink}
          >
            [reflection tools]
          </a>
        </div>
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
