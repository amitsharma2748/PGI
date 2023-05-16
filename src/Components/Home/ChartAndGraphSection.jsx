import React, { useState } from "react";
import "../../styles/Home.scss";
import IndiaMaps from "./IndiaMaps.jsx";
import IndiaBarChart from "./IndiaBarChart.jsx";
import NationalListView from "./NationalListView.jsx";
import { Box, Typography } from "@mui/material";
import SectionHeader from "./SectionHeader";

export default function ChartAndGraphSection() {
  const [chartOrListTrigger, setChartOrListTrigger] = useState(true);

  const ClickTrigger = () => {
    setChartOrListTrigger(!chartOrListTrigger);
  };

  return (
    <Box className="chart-graph-content">
      <SectionHeader
        title="PGI-District Grading"
        mid_title="National"
        stateValue={chartOrListTrigger}
        StateValueFunc={ClickTrigger}
      />
      <Box>
        {chartOrListTrigger ? (
          <Box className="charts-and-graph" id="national-charts-and-graph">
            <Box className="map-and-chart-bundle">
              <IndiaMaps />
              <hr />
              <IndiaBarChart />
            </Box>
            <Box className="map-color-bar">
              {data.map((el) => {
                return <MapColorBar key={el.id} data={el} />;
              })}
            </Box>
          </Box>
        ) : (
          <Box
            className="charts-and-graph-list-view"
            id="national-charts-and-graph-list-view"
          >
            <NationalListView />
          </Box>
        )}
      </Box>
    </Box>
  );
}
const MapColorBar = (props) => {
  return (
    <Box className="map-color-single-bar">
      <Box
        className="color-coding"
        style={{ backgroundColor: props.data.color }}
      ></Box>
      <Typography component={"span"}>{props.data.name}</Typography>
    </Box>
  );
};

let data = [
  { id: 1, name: "Daksh(91% to 100%)", color: "#0000ff" },
  { id: 2, name: "Utkarsh(81% to 90%)", color: "#5050ff" },
  { id: 3, name: "Ati-Uttam(71% to 80%)", color: "#7d7dff" },
  { id: 4, name: "Uttam(61% to 70%)", color: "#009632" },
  { id: 5, name: "Prachesta-1(51% to 60%)", color: "#96ff96" },
  { id: 6, name: "Prachesta-2(41% to 50%)", color: "#ffff00" },
  { id: 7, name: "Prachesta-3(31% to 40%)", color: "#ffc800" },
  { id: 8, name: "Akanshi-1(21% to 30%)", color: "#fa9696" },
  { id: 9, name: "Akanshi-2(11% to 20%)", color: "#fa6464" },
  { id: 10, name: "Akanshi-3(Upto 10%)", color: "#fa4b4b" },
];
