import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../data/Data";

const ExCard = () => {
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
    date="2011 - present"
    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management,
      Team Leading
    </p>
  </VerticalTimelineElement>;
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
