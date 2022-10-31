import React, { useState } from "react";
import Fade from "@material-ui/core/Fade";
import { icons } from "./constants";

export function Icon({ icon, link, text, color, positionTop }) {
  const [hover, setHover] = useState(false);

  const linkStyle = {
    ...iconStyle,
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
      <div style={{ ...iconContainer }}>
        <img
          rel="preload"
          style={linkStyle}
          src={icon}
          alt={`hand-drawn icon of ${text}`}
        />
        <div style={textStyle}>{text}</div>
      </div>
    </a>
  );
}

export default function Contact() {
  return (
    <div style={container}>
      <Fade in={true} {...{ timeout: 700 }}>
        <div style={child}>
          {Object.values(icons).map((icon) => {
            return <Icon {...icon} />;
          })}
        </div>
      </Fade>
    </div>
  );
}

const child = {
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: -40,
};
const container = {
  ...child,
  margin: 0,
};

const iconContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10%",
  height: 80,
  width: 80,
};

const textStyle = {
  textDecoration: "none",
  marginTop: -10,
  marginBottom: 10,
};

const iconStyle = {
  height: 40,
  width: 40,
  margin: 10,
  transition: "all ease .3s",
};

const href = {
  color: "black",
  textDecoration: "none",
};
