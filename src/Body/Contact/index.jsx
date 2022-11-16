import React, { useState } from "react";
import Fade from "@material-ui/core/Fade";
import { icons } from "./constants";

export function Icon({ icon, link, text, color, positionTop }) {
  const [hover, setHover] = useState(false);

  const linkStyle = {
    transform: hover ? "scale(1.2)" : "",
  };

  return (
    <a
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      style={href}
      target="_blank"
      rel="noopener noreferrer"
      href={link}
    >
      <div className={iconContainer} style={{ backgroundColor: color }}>
        <img
          rel="preload"
          className={iconStyle}
          style={linkStyle}
          src={icon}
          alt={`hand-drawn icon of ${text}`}
        />
        <div className={textStyle}>{text}</div>
      </div>
    </a>
  );
}

export default function Contact() {
  return (
    <div className={container}>
      <Fade in={true} {...{ timeout: 700 }}>
        <>
        {Object.values(icons).map((icon) => {
          return <Icon {...icon} />;
        })}
        </>
      </Fade>
    </div>
  );
}

const container =
  "sm:h-full w-full flex flex-col sm:flex-row justify-around sm:items-center sm:justify-center";
const iconContainer =
  "sm:h-screen w-screen h-[120px] flex flex-col justify-center items-center sm:max-w-[120px]";

const textStyle = 'decoration-none -mt-4'
const iconStyle = "h-[40px] w-[40px] m-4 sm:-mt-[40px]";

const href = {
  color: "black",
  textDecoration: "none",
};
