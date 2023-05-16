import React from "react";
import "../../styles/IndiaMap.scss";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Box } from "@mui/material";

export default function IndiaBarChart() {
  const options = {
    chart: {
      type: "column",
      width:
        document.body.offsetWidth > 650
          ? 515
          : document.body.offsetWidth > 300
          ? 300
          : 240,
      height:
        document.body.offsetWidth > 650
          ? 550
          : document.body.offsetWidth > 300
          ? 320
          : 260,
      animation: false,
    },
    accessibility: {
      description: "Showing India Detail in bar",
    },
    title: {
      text: "",
    },

    xAxis: {
      type: "category",
      margin: 4,            
      categories: [
        "Daksh",
        "Utkarsh",
        "Ati-Uttam",
        "Uttam",
        "Prachesta-1",
        "Prachesta-2",
        "Prachesta-3",
        "Akanshi-1",
        "Akanshi-2",
        "Akanshi-3",
      ],
      crosshair: {
        color: "rgba(0, 0, 255, 0.1)",
      },
    },
    credits: {
      enabled: false,
    },
    yAxis: {
      title: {
        text: "",
      },
    },

    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 2,
        pointWidth: document.body.offsetWidth > 300 ? 25 : 15,
        dataLabels: {
          enabled: false,
        },
      },
    },

    series: [
      {
        name: "PGI-District Grading",
        cursor: "pointer",
        data: data,
        tooltip: {
          headerFormat: "",
          pointFormat:
            "<span><b>{point.name}</b></span><br /> District: <b>{point.y}</b><br/>",
        },
      },
    ],
  };

  return (
    <Box className="bar-chart-india">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Box>
  );
}

var data = [
  {
    y: 0,
    name: "Daksh",
    color: "#0000ff",
  },
  {
    y: 4,
    name: "Utkarsh",
    color: "#5050ff",
  },
  {
    y: 148,
    name: "Ati-Uttam",
    color: "#7d7dff",
  },
  {
    y: 256,
    name: "Uttam",
    color: "#009632",
  },
  {
    y: 213,
    name: "Prachesta-1",
    color: "#96ff96",
  },
  {
    y: 77,
    name: "Prachesta-2",
    color: "#ffff00",
  },
  {
    y: 21,
    name: "Prachesta-3",
    color: "#ffc800",
  },
  {
    y: 6,
    name: "Akanshi-1",
    color: "#fa9696",
  },
  {
    y: 12,
    name: "Akanshi-2",
    color: "#fa6464",
  },
  {
    y: 1,
    name: "Akanshi-3",
    color: "#fa4b4b",
  },
];
