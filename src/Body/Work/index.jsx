import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { metier } from "./constants";
import { school, computer } from "../../assets/work";
import "./Work.css";

const SchoolIcon = (
  <img
    className="w-full h-full"
    src={school}
    alt={"hand-drawn icon of graduation cap"}
  />
);
const WorkIcon = (
  <img
    className="w-full h-full"
    src={computer}
    alt={"hand-drawn icon of laptop"}
  />
);

export function TimelineElement({
  position,
  description,
  work,
  place,
  time,
  location,
  placeLink,
}) {
  return (
    <VerticalTimelineElement
      contentStyle={{ ...contentStyle }}
      contentArrowStyle={contentArrowStyle}
      iconStyle={work ? workIconStyle : iconStyle}
      icon={work ? WorkIcon : SchoolIcon}
    >
      <div
        className="rounded-t-md px-2 items-center timeline-content"
        style={
          work
            ? { borderBottom: "10px solid #7a7025" }
            : { borderBottom: "10px solid #491510" }
        }
      >
        <div className="font-bold text-md">{position}</div>
        <div className={`text-xs ${placeLink && "underline"}`}>
          <a href={placeLink}>{place}</a>
        </div>

        <div className={`py-4`}>
          <div className={`text-xs mb-4 text-gray-500`}>{description}</div>
          <div className="flex justify-between flex-col">
            <div className="text-xs font-bold ">{time}</div>
            <div className="text-xs">{location}</div>
          </div>
        </div>
      </div>
    </VerticalTimelineElement>
  );
}

export default function Work() {
  return (
    <div className={container}>
      <VerticalTimeline layout={"2-columns"}>
        {Object.values(metier).map((position) => {
          return <TimelineElement {...position} />;
        })}
      </VerticalTimeline>
    </div>
  );
}

const container = "flex flex-col flex-nowrap justify-center items-center";

const contentStyle = {
  boxShadow: "none",
  marginTop: 0,
  padding: 0,
};

const contentArrowStyle = {
  display: "none",
};

const iconStyle = {
  boxShadow: "none",
  color: "white",
  backgroundColor: "#b17b65bf",
};

const workIconStyle = {
  ...iconStyle,
  backgroundColor: "#e9d96594"
};
