import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { routes, pdfLink, repoLink } from "./constants";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export function AccountMenu({ selectedRoute, changeRoute }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const menuIconStyle = { width: 32, height: 32, color: "black" };
  return (
    <React.Fragment>
      <div className="flex z-20 absolute right-0 top-0">
        <IconButton
          onClick={handleClick}
          size="large"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          {open ? (
            <CloseIcon sx={menuIconStyle} />
          ) : (
            <MenuIcon sx={menuIconStyle} />
          )}
        </IconButton>
      </div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            width: 200,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
      >
        <div className="flex flex-col items-start justify-around">
          {Object.values(routes).map((page, i) => {
            const isSelected = page.route === selectedRoute;
            return (
              <MenuItem key={i}>
                <div
                  key={page.route}
                  className={(isSelected && " border-r-2 border-black font-bold")}
                  onClick={() => changeRoute(page.route)}
                >
                  <Link to={page.route}>
                    {page.label}
                  </Link>
                </div>
              </MenuItem>
            );
          })}
        </div>
      </Menu>
    </React.Fragment>
  );
}

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
          <Link to={page.route} className={link}>
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
      <div className={routesContainer}>
        <Routes {...routesProps} />
        <SubRoutes />
      </div>
      <div className="md:hidden">
        <AccountMenu {...routesProps} />
      </div>
    </div>
  );
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

const routesContainer =
  "w-full hidden md:flex md:flex-col justify-center md:items-end";
const container = "right-0 top-0 w-full flex md:h-full md:w-[300px]";

const routeContainer =
  "flex md:flex-col items-end w-full text-sm pb-1 pl-1 m-2 md:first:mt-0 cursor-pointer";
const subRoutes = " flex flex-nowrap";

const link = "text-[inherit] decoration-none";
