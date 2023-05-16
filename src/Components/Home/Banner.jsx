import React, { useState, useEffect } from "react";
import SingleBanner from "./SingleBannner.jsx";
import { Box, Button } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export default function Banner() {
  const [Slider_position, setSlider_position] = useState(0);
  const [Xmovement, setXmovement] = useState(0);
  const [iniPos, setIniPos] = useState(0);

  var slider_timeout;
  useEffect(() => {
    slider_timeout = setTimeout(() => {
      right_slider_push_button(true);
    }, 4000);
    return () => {
      clearTimeout(slider_timeout);
    };
  }, [Slider_position]);

  const left_slider_push_button = () => {
    if (Slider_position >= 0) {
      setSlider_position(0);
      document.querySelector(".home-banner-slider").style.transform =
        "translateX(0)";
    } else {
      setSlider_position(Slider_position + 100);
      document.querySelector(".home-banner-slider").style.transform =
        "translateX(calc(" + Slider_position + "vw + 100vw))";
    }
  };
  const right_slider_push_button = (type = false) => {
    if ((type && Slider_position === -700) || Slider_position === -700) {
      setSlider_position(0);
      document.querySelector(".home-banner-slider").style.transform =
        "translateX(0)";
    } else {
      setSlider_position(Slider_position - 100);
      document.querySelector(".home-banner-slider").style.transform =
        "translateX(calc(" + Slider_position + "vw - 100vw))";
    }
  };

  const HandlemouseDown = (e) => {
    setIniPos(e.clientX);
  };

  const HandlemouseUp = (e) => {
    if (iniPos === e.clientX) return;
    setXmovement(iniPos - e.clientX);
  };

  useEffect(() => {
    if (Xmovement > 0) {
      right_slider_push_button();
    } else if (Xmovement < 0) {
      left_slider_push_button();
    }
  }, [Xmovement]);

  return (
    <>
      <Button
        disabled={Slider_position === 0}
        onClick={left_slider_push_button}
        className="slider-push-button"
      >
        <ChevronLeftIcon />
      </Button>
      <Box
        className="home-banner-slider"
        onMouseDown={HandlemouseDown}
        onMouseUp={HandlemouseUp}
      >
        {data.map((e) => {
          return <SingleBanner key={e.id} index={e.id} data={e} />;
        })}
      </Box>
      <Button
        disabled={Slider_position === -700}
        onClick={right_slider_push_button}
        className="slider-push-button"
      >
        <ChevronRightIcon />
      </Button>
    </>
  );
}

let data = [
  {
    id: 1,
    name: "first",
    middlePara: "Analyzing Data via PGI Tool",
    rightText:
      "The Govt. of India is implementing the Performance Grading Index (PGI) tool to determine the progress of states and districts in India.",
  },
  {
    id: 2,
    name: "Outcomes",
    middlePara: "",
    rightText:
      "Domains covered under this category are mainly Learning Outcomes & Quality (LOQ), Access Outcomes (AO) and Teacher Availability & Professional Development Outcome (TAPDO). The indicators in these domains mainly deal with the net enrolment ratio, Retention rate, Transition rate, trained teachers availability, pupil teacher ratio and performance of students in Language and Mathematics in standard 3, 5, 8 and 10 of Govt. and aided schools.",
  },
  {
    id: 3,
    name: "ECT",
    middlePara: "Effective Classroom Transaction",
    rightText:
      "This category majorly deals with Learning Management (LM) and Learning Enrichment Activities (LEA). Key indicators for measurement are conduction of regular formative assessments, utilization of learning material in classroom transactions and participation in national flagship programmes like Swachh Bharat and Jal Suraksha, FIT India , Ek Bharat Shresth Bharat and Nagrik Kartavya Palan Abhiyan/ Constitution Day.",
  },
  {
    id: 4,
    name: "IF&SE",
    middlePara: "Infrastructure, Facilities, Student Entitlements",
    rightText:
      "The domains and indicators in this domain are mainly related to infrastructure in schools to enable adequate facilities for teaching and learning. These include availability of study material, school uniform, CWSN aid & appliances, scholarships and incentives to girls Science and Computer laboratories at secondary and senior secondary level, libraries, library books, kitchen garden, sports equipments etc.",
  },
  {
    id: 5,
    name: "SS&CP",
    middlePara: "School Safety and Child Protection",
    rightText:
      "School Safety and Child Protection category primarily defines domains and indicators that cater the protection and safety of children in schools. This category pinpoints availability of qualified Child Counsellor/ Psychologist, conduction of sensitization programme for teachers, staff, parents and students, readiness for School Disaster Management Plan and conducting regular health check-up and maintaining health-card.",
  },
  {
    id: 6,
    name: "DL",
    middlePara: "Digital Learning",
    rightText:
      "The domains and indicators in this category primarily deal with key areas that effect learning of children in digital mode. It includes internet facility for pedagogical purposes, computer-assisted teaching learning facility and Student-to-Computer Ratio.",
  },
  {
    id: 7,
    name: "GP",
    middlePara: "Governance Processes",
    rightText:
      "This category deals with indicators relating to management and administration of school education. This includes Samagra Siksha Funds utilisation, Performance and training of cluster resource coordinators, Attendance monitoring and training and availability of head teachers and principals.",
  },
  { id: 8, name: "last", middlePara: "", rightText: "" },
];
