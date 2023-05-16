import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../styles/component/Footer.scss";
import { useInView } from "react-intersection-observer";
import pic from "../images/Header_and_Footer/Analytics1.png";
import pic2 from "../images/Header_and_Footer/Analytics2.png";
const DataSource = () => {
  const { ref: dataRef1, inView: inView1 } = useInView();
  const { ref: imgRef1, inView: inView2 } = useInView();
  const { ref: dataRef2, inView: inView3 } = useInView();
  const { ref: imgRef2, inView: inView4 } = useInView();

  console.log(inView1);
  return (
    <Container disablePadding maxWidth={"lg"}>
      <Grid
        container
        className="data-source"
        alignItems="flex-start"
        spacing={16}
      >
        <Grid
          ref={dataRef1}
          item
          md={6.5}
          xs={12}
          sx={{ justifyContent: { xs: "center", md: "center" } }}
        >
          <Box
            className={` ${inView1 ? "animateLeft" : ""}`}
            paddingRight={4}
            component="div"
          >
            <Typography className="header" variant="h3">
              Data Source
            </Typography>
            <Box className="content">
              <Typography variant="p">
                PGI-D is constructed based on identified indicators and domains.
                The data for PGI-D drawn from several sources, viz., Unified
                District Information System for Education Plus (UDISE +),
                National Achievement Survey (NAS) 2017 and data provided by
                respective Districts.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          sx={{ textAlign: { xs: "center", lg: "right" }, marginTop: "2em" }}
          className={`${"img"} ${inView2 ? "animateRight" : ""}`}
          md={5.5}
          xs={12}
        >
          <Box
            sx={{ maxWidth: "95%" }}
            ref={imgRef1}
            component="img"
            src={pic}
          />
        </Grid>
      </Grid>
      <Grid container alignItems="flex-start" justify="center" spacing={15}>
        <Grid
          item
          order={{ xs: 2, md: 1 }}
          sx={{ justifyContent: { xs: "center", md: "left" } }}
          textAlign="left"
          className={`${"img"} ${inView3 ? "animateLeft" : ""}`}
          md={5.5}
          xs={12}
        >
          <Box
            sx={{ maxWidth: "95%" }}
            ref={imgRef2}
            component="img"
            src={pic2}
          />
        </Grid>
        <Grid
          order={{ xs: 1, md: 2 }}
          sx={{
            justifyContent: { xs: "center", md: "right" },
          }}
          item
          md={6.5}
          xs={12}
        >
          <Box
            variant="p"
            ref={dataRef2}
            className={`${"data-source"} ${inView4 ? "animateRight" : ""}`}
          >
            <Typography className="header" variant="h3">
              Methodology
            </Typography>
            <Box className="content">
              <Typography variant="p">
                The architecture of the PGI-D emanates from the rationale that
                an efficient, inclusive and equitable school education system is
                contingent upon the regular monitoring of interconnected
                matrices of inputs, outputs and outcomes related to school
                education indicators, and the development of a quick response
                system for course correction in the entire system.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DataSource;
