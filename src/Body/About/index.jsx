import React, { useState } from "react";
import Fade from "@material-ui/core/Fade";
// import { Draw } from '@mui/icons-material';

import Switch from "./Switch";
import { default as Bio } from "../../assets/bio.svg";

const Portrait = "https://avatars.githubusercontent.com/u/40186534?v=4";
// #703427
// #84220d
// #a8331a
// #491510
// #70241a
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

const container = "flex flex-col md:flex-row rounded-sm items-center";
const btnGroup = "flex absolute md:left-0 bottom-0 -mb-10 cursor-pointer ml-[20px]";
const bioContainer = " md:-mt-4 relative h-[250px]";
const blurbImg =
  "max-w-[350px] flex flex-col justify-center w-full mt-4 h-full" +
  " md:m-0 px-4 md:p-4 border-[1px] rounded-[10%] border-[#7a7025]";
const imgContainer =
  "flex bg-[#491510] p-4 rounded-full rounded-r-none pr-0 md:mr-[40px] mr-4";
const portImg = "h-auto w-[220px] rounded-lg rounded-r-none";
const title = "font-bold text-lg mb-[10px]";
const textBlurb = blurbImg + " font-[400] leading-1 text-xs";
