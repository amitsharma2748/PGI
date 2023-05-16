import React from "react";
import { useInView } from "react-intersection-observer";
import AboutPGI from "../../images/Home/about-pgi.gif";
import "../../styles/Home.scss";
import { Box, Typography } from "@mui/material";

export default function AboutPGID() {
  const { ref: leftRef, inView: leftRefActive } = useInView({
    triggerOnce: true,
  });
  const { ref: RightRef, inView: RightRefActive } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <Box
        className={`left-about-section  ${leftRefActive ? "animateLeft" : ""}`}
        ref={leftRef}
      >
        <Typography component={"h1"} className="sections-heading">
          About PGI-D
        </Typography>
        <Typography component={"p"} className="sections-para">
          The Performance Grading Index is a tool to provide insights on the
          status of school education in districts including key levers that
          drive their performance and critical areas for improvement.
        </Typography>
        <Typography component={"p"} className="sections-para">
          Grading will allow all districts to occupy the highest level i.e Daksh
          I, at the same time which is a sign of fully developed nation.
        </Typography>
      </Box>
      <Box
        className={`right-about-section ${
          RightRefActive ? "animateRight" : ""
        }`}
        ref={RightRef}
      >
        <Typography component={"img"} src={AboutPGI} alt="About PGI-D" />
      </Box>
    </>
  );
}
