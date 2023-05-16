import React, { useEffect, useState } from "react";
import "../../styles/Home.scss";

import AboutPGID from "./AboutPGID.jsx";
import PGIDCategories from "./PGIDCategories.jsx";
import Banner from "./Banner.jsx";
import { Box, Typography } from "@mui/material";
import ChartAndGraphSection from "./ChartAndGraphSection";
import NumOfDistricts from "../../Shared/NumOfDistricts";

export default function Home() {
  useEffect(() => {
    document.querySelector(".banner-slider").style.height =
      "calc(" +
      document.querySelector(".banner-page-type2").getBoundingClientRect()
        .height +
      "px + 6.6rem)";
  }, []);

  return (
    <>
      <Typography component={"section"} className="banner-slider">
        <Banner />
      </Typography>
      <Typography component={"section"} className="chart-graph">
        <ChartAndGraphSection />
      </Typography>

      <NumOfDistricts />

      <Typography component={"section"} className="about-pgid">
        <AboutPGID />
      </Typography>
      <Typography component={"section"} className="pgid-categories">
        <PGIDCategories />
      </Typography>
    </>
  );
}
