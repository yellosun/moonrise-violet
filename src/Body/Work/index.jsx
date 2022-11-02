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
  place,
  time,
  location,
  placeLink
}) {
  return (
    <VerticalTimelineElement
      contentStyle={{ ...contentStyle }}
      contentArrowStyle={contentArrowStyle}
      iconStyle={iconStyle}
      icon={icon}
    >
      <div className="flex justify-between items-center">
        <div className="font-bold text-md">{position}</div>
        <div className={"text-xs underline"}>
			<a href={placeLink}>{place}</a>
			</div>
      </div>
      <div className="italic text-xs my-4 bg-white rounded-md border-2 p-4">{description}</div>
      <div className="flex justify-between items-center">
        <div className="text-xs">{time}</div>
        <div className="text-xs">{location}</div>
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

const container =
  "flex flex-col flex-nowrap justify-center items-center";

const contentStyle = {
  boxShadow: "rgb(0 0 0 / 0%) -1px 1px 10px 0.1px",
  marginTop: 0,
};

const contentArrowStyle = {
  borderRight: "7px solid black",
};

const iconStyle = {
  boxShadow: "none",
  color: "white",
};
