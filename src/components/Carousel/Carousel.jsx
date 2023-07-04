import React from "react";
import Carousel from "react-material-ui-carousel";
import classes from "./Carousel.module.css";

function Item({ item }) {
  return (
    <div
      className={classes["benefits-section-carousel-layout"]}
      style={{
        height: "26rem",
        width: "100%",
        padding: "3rem 3rem 3rem 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={classes["benefits-section-carousel-img"]}>
        <img src={"/" + item.image + ".png"} alt={item.image} />
      </div>
      <div className={classes["benefits-section-carousel-heading"]}>
        {item.heading}
      </div>
      <div className={classes["benefits-section-carousel-subheading"]}>
        {item.subheading}
      </div>
      <div style={{ margin: "1rem", fontSize: "1rem" }}>{item.description}</div>
    </div>
  );
}

export default function BenefitsCarousel() {
  let items = [
    {
      image: "time",
      size: "10rem",
      heading: "Save time and effort in your hiring journey. ",
      subheading: "Quicker approvals and faster TAT",
      description:
        "Submit and approve Job Requisitions or Offers with lightning speed to reduce your Turn-Around-Time (TAT) in recruitment with audit trail features to track changes.",
    },
    {
      image: "management",
      size: "10rem",

      heading: "Effective Interview Management",
      subheading:
        "Streamline the interview process for candidates, panelists & hiring managers",
      description:
        "Assign delegates for candidate interviews, communicate feedback more effectively and shift the relationship between Hiring Managers from reactive to strategic with Talent Recruit.",
    },
    {
      image: "feedback",
      size: "10rem",

      heading: "Collect Interview Feedback",
      subheading: "Derive key insights from your interviews",
      description:
        "Feedback from your Hiring Managers is essential to drive a successful recruitment strategy. Ensure the timely collection of feedback on interviewed candidates with Talent Recruit.",
    },
  ];

  const [index, setIndex] = React.useState(0);

  const handleChange = (curr, prev) => {
    setIndex(curr);
  };

  return (
    <div>
      <Carousel
        index={index}
        onChange={handleChange}
        interval={4000}
        animation="slide"
        indicators={true}
        stopAutoPlayOnHover
        swipe
        className={classes["my-carousel"]}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}
