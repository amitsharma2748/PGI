import React from "react";
import { useInView } from "react-intersection-observer";
import "../../styles/PGIDCategoriesStyling.scss";
import PGIDCards from "./PGIDCards";
import { Box, Typography } from "@mui/material";

export default function PGIDCategories() {
  const { ref: leftRef, inView: leftRefActive } = useInView({
    triggerOnce: true,
  });

  return (
    <Box className="categories-and-card">
      <Box
        className={`categories-text-content ${
          leftRefActive ? "animateLeft" : ""
        }`}
        ref={leftRef}
      >
        <Typography component={"h1"} className="sections-heading">
          PGI-D Categories
        </Typography>
        <Typography component={"p"} className="sections-para">
          The PGI-D scores are the aggregate score of 6 categories of
          educational attainment of districts viz., Outcomes, Effective
          Classroom Interactions, Infrastructure Facilities & Student’s
          Entitlements, School Safety & Child Protection, Digital Learning and
          Governance Process. The category-wise analysis brings out areas of
          good practices and weak links among districts providing insights into
          future action plan.
        </Typography>
      </Box>
      <Box className="cards-section">
        {data.map((el) => {
          return <PGIDCards key={el.srno} data={el} />;
        })}
      </Box>
    </Box>
  );
}

var data = [
  {
    srno: 1,
    name: "Digital Learning (DL)",
    para: "The domains and indicators in this category primarily deal with key areas that effect learning of children in digital mode. It",
  },
  {
    srno: 2,
    name: "Infrastructure, Facilities, Student Entitlements (IF & SE)",
    para: "The domains and indicators in this domain are mainly related to infrastructure in schools to enable adequate facilities for",
  },
  {
    srno: 3,
    name: "Outcomes",
    para: "Domains covered under this category are mainly Learning Outcomes & Quality (LOQ), Access Outcomes (AO) and Teacher",
  },
  {
    srno: 4,
    name: "Governance Processes (GP)",
    para: "This category deals with indicators relating to management and administration of school education. This includes Samagra",
  },
  {
    srno: 5,
    name: "School Safety and Child Protection (SS & CP)",
    para: "School Safety and Child Protection category primarily defines domains and indicators that cater the protection and",
  },
  {
    srno: 6,
    name: "Effective Classroom Transaction (ECT)",
    para: "This category majorly deals with Learning Management (LM) and Learning Enrichment Activities (LEA). Key indicators",
  },
];
