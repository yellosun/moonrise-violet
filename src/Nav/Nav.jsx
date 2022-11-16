import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { routes, pdfLink, repoLink } from "./constants";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';

export function Routes({ selectedRoute, changeRoute }) {
  return Object.values(routes).map((page, i) => {
    const isSelected = page.route === selectedRoute;

    return (
      <div
        key={i}
        className={`m-2 flex items-center justify-center font-bold text-[#e5ddd7] md:text-black ${
          isSelected && "md:-mr-[10px] italic"
        }`}
      >
        <div
          key={page.route}
          className={routeContainer}
          onClick={() => changeRoute(page.route)}
        >
          <Link to={page.route} className={link}>
          {isSelected && <NightlightRoundIcon fontSize="small" sx={{ marginRight: 1 }}/>}
            {page.label}
          </Link>
        </div>
      </div>
    );
  });
}

function SubRoutes() {
  return (
    <div className={routeContainer + subRoutes}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="text-[10px] hover:underline"
        href={repoLink}
      >
        [site source code]
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="text-[10px] hover:underline"
        href={pdfLink}
      >
        [reflection tools]
      </a>
    </div>
  );
}

export default function Nav() {
  const { pathname } = useLocation();
  const [selectedRoute, changeRoute] = useState(pathname);
  const routesProps = { selectedRoute, changeRoute };

  return (
    <div className={container}>
      <div className={routesContainer}>
        <Routes {...routesProps} />
        <SubRoutes />
      </div>
      <div className="md:hidden">
        <TemporaryDrawer {...routesProps} />
      </div>
    </div>
  );
}

const routesContainer =
  "w-full hidden md:flex md:flex-col justify-center md:items-end";
const container =
  "right-0 top-0 w-full flex absolute md:relative md:h-full md:w-[300px]";

const routeContainer =
  "flex flex-col md:items-end w-full text-sm px-4 pb-2 md:pb-1 md:pl-1 md:m-2 first:mt-0 cursor-pointer";
const subRoutes = " flex flex-nowrap text-[#e5ddd7] md:text-black";

const link = "text-[inherit] decoration-none";

export function TemporaryDrawer(routesProps) {
  const [state, setState] = React.useState({ top: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const anchor = "top";
  return (
    <>
      <Button
        sx={{ color: "black", marginTop: "20px !important", zIndex: 1200 }}
        onClick={toggleDrawer(anchor, true)}
      >
        <MenuIcon />
      </Button>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        <Box
          sx={{ backgroundColor: 'black' }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            <Routes {...routesProps}/>
          </List>
          <Divider sx={{ marginBottom: 1, backgroundColor: '#e5ddd7' }} />
          <List>
            <SubRoutes />
          </List>
        </Box>
      </Drawer>
    </>
  );
}
