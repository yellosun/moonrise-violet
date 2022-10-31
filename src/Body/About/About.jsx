import React, { useState } from "react";
import Fade from "@material-ui/core/Fade";
// import { Draw } from '@mui/icons-material';

import Switch from "./Switch";
import { default as Bio } from "../../assets/bio.svg";

const Portrait = "https://avatars.githubusercontent.com/u/40186534?v=4";

export default function About() {
  const [isText, setTextView] = useState(false);

  const switchProps = {
    checked: isText,
    onChange: () => setTextView(!isText),
  };

  return (
    <Fade in={true} {...{ timeout: 700 }}>
      <div className={container}>
        <div className={imgContainer}>
          <img
            rel="preload"
            src={Portrait}
            className={portImg}
            alt={
              "portait of violet moon in front of white walls and black door frames"
            }
          />
        </div>
        <div className={bioContainer}>
          {isText ? (
            <div className={textBlurb}>
              <div className={title}>Hi, I'm Violet Moon.</div>
              <div>
                This blurb would probably be more legible typed... but
                potentially more representative written. User's choice. I'm a
                web developer among many, evolving things. I innately seek
                patterns and solutions to life's puzzles (and acceptance when
                there aren't any). Mostly, I enjoy creating, leaning on trees,
                and hugging cats— hoping somewhere in there something beautiful
                and something human unfolds.
              </div>
            </div>
          ) : (
            <img
              rel="preload"
              src={Bio}
              className={blurbImg}
              alt={"hand-written paragraph about violet moon"}
            />
          )}
          <div className={btnGroup}>
            <Switch {...switchProps} />
          </div>
        </div>
      </div>
    </Fade>
  );
}

const container = "flex items-center";
const btnGroup =
  container + " absolute bottom-0 -mb-[30px] text-xs cursor-pointer";
const bioContainer = "justify-between flex relative flex-col h-[220px]";
const blurbImg = "h-auto w-[350px]";
const imgContainer = "flex";
const portImg = "h-auto w-[220px] mr-[40px] rounded-sm";
const title = "font-bold text-lg mb-[10px]";
const textBlurb = blurbImg + " font-[300] leading-1";
