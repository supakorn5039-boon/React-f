import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../data/Data";

const Experience = () => {
  return(
    <div>
      <VerticalTimeline>
        {
          experiences.map(())
        }
      </VerticalTimeline>
    </div>
    )
};

export default Experience;
