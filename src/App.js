import React from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import Body from "./Body";

export default function Home() {
  return (
    <div className={container}>
      <div className={content}>
        <BrowserRouter>
          <Nav />
          <Body />
        </BrowserRouter>
      </div>
    </div>
  );
}

const container =
  "flex justify-center h-screen text-sm font-[500] font-poppins";
const content =
  "md:w-[1100px] flex flex-col md:flex-row transition ease-in-out delay-150";
