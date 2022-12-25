import React from "react";
import "../ComponentsStyles/Teachers.css";
import { CharCard } from "./CharCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const Teachers = () => {
  return (
    <div className="TeachersBody">
      <div className="FontT2">KEY PERSONS</div>
      <div className="FontT1">Meet our teachers</div>
      <div>
        <Carousel responsive={responsive}>
          <div>
            <CharCard
              imgurl="Teacher-1.png"
              name="Christian Howard"
              subject="Italian"
              flagurl="Flag-1.png"
            />
          </div>
          <div>
            <CharCard
              imgurl="Teacher-2.png"
              name="Sandra Wilson"
              subject="Italian"
              flagurl="Flag3.png"
            />
          </div>
          <CharCard
            imgurl="Teacher-3.png"
            name="Jimmy Cooper"
            subject="English"
            flagurl="Flag2.png"
          />
          <div>
            <CharCard
              imgurl="Teacher-1.png"
              name="Christian Howard"
              subject="Italian"
              flagurl="Flag-1.png"
            />
          </div>
          <div>
            <CharCard
              imgurl="Teacher-2.png"
              name="Sandra Wilson"
              subject="Italian"
              flagurl="Flag3.png"
            />
          </div>
          <CharCard
            imgurl="Teacher-3.png"
            name="Jimmy Cooper"
            subject="English"
            flagurl="Flag2.png"
          />
        </Carousel>
      </div>
    </div>
  );
};
