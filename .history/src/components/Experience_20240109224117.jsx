/* eslint-disable react/prop-types */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../data/Data";

const ExCard = ({ item }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
      date={item.date}
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    >
      <h3 className="vertical-timeline-element-title">{item.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">
        {item.company_name}
      </h4>
      <ul>
        {item.points.map((p, index) => (
          <li key={index}>{p}</li>
        ))}
      </ul>
      <image
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div>
      <VerticalTimeline>
        {experiences.map((item, index) => (
          <ExCard key={index} item={item} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
