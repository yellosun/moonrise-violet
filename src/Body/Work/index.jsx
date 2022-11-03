import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { metier } from "./constants";
import "react-vertical-timeline-component/style.min.css";
import "./Work.css";

export function TimelineElement({
  icon,
  position,
  description,
  backgroundColor,
  place,
  time,
  location,
  placeLink,
}) {
  return (
    <VerticalTimelineElement
      contentStyle={{ ...contentStyle }}
      contentArrowStyle={contentArrowStyle}
      iconStyle={iconStyle}
      icon={icon}
    >
      <div
        className="flex justify-between rounded-t-md py-1 px-3 items-center"
        style={{ backgroundColor }}
      >
        <div className="font-bold text-md">{position}</div>
        <div className={"text-xs underline"}>
          <a href={placeLink}>{place}</a>
        </div>
      </div>
      <div className="border-2 rounded-b-md p-4">
        <div className="text-xs mb-4">{description}</div>
        <div className="flex justify-between items-center">
          <div className="text-xs">{time}</div>
          <div className="text-xs">{location}</div>
        </div>
      </div>
    </VerticalTimelineElement>
  );
}

export default function Work() {
  return (
    <div className={container}>
      <VerticalTimeline layout={"2-columns"} lineColor={"black"}>
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
};
