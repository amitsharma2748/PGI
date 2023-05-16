import HighchartsReact from "highcharts-react-official";
import React from "react";
import Highcharts from "highcharts";

const DistrictLineChart = () => {
  const options = {
    yAxis: {
      title: {
        text: "",
      },
    },

    xAxis: {
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
      crosshair: true,
    },

    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span>',
      pointFormat: `<table>
      <tr>
      <td style='color:{series.color}; padding:0}">{series.name}: </td>
      <td style="padding:1"><b>{point.y} District</b></td>
      </tr>
      <tr>
      <td style='color:{series.color}; padding:0}">{series.name}: </td>
      <td style="padding:1"><b>{point.y} District</b></td>
      </tr>
      </table>
       `,

      shared: true,
      useHTML: true,
    },
    credits: false,
    title: {
      text: "",
    },
    plotOptions: {
      series: {
        animation: false,
      },
    },
    legend: {
      verticalAlign: "top",
      align: "left",
      x: -20,
    },
    series: [
      {
        name: "2020-21",
        data: [0, 4, 149, 258, 213, 77, 21, 6, 12, 1],
        color: "rgb(56, 56, 118)",
      },
      {
        name: "2019-20",
        data: [0, 3, 85, 274, 241, 86, 40, 3, 1, 0],
        color: "rgb(217, 65, 72)",
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {},
        },
      ],
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default DistrictLineChart;
