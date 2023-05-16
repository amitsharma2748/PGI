import React from "react";
import "../../styles/Banner.scss";
import FloaterFirstImage from "../../images/Home/banner-img1.svg";
import FloaterLastImage from "../../images/Home/banner-img8.png";
import Floater2ndImage from "../../images/Home/banner-img2.png";
import Floater2ndSvgImage from "../../images/Home/banner-img2-svg.svg";
import Floater3rdImage from "../../images/Home/banner-img3.png";
import Floater3rdSvgImage from "../../images/Home/banner-img3-svg.svg";
import Floater4thImage from "../../images/Home/banner-img4.png";
import Floater4thSvgImage from "../../images/Home/banner-img4-svg.svg";
import Floater5thImage from "../../images/Home/banner-img5.png";
import Floater5thSvgImage from "../../images/Home/banner-img5-svg.svg";
import Floater6thImage from "../../images/Home/banner-img6.png";
import Floater6thSvgImage from "../../images/Home/banner-img6-svg.svg";
import Floater7thImage from "../../images/Home/banner-img7.png";
import Floater7thSvgImage from "../../images/Home/banner-img7-svg.svg";
import { Box, Button, Typography } from "@mui/material";

export default function SingleBannner(props) {
  return (
    <>
      {props.data.name == "first" || props.data.name == "last"
        ? BannnerType1(props.data)
        : BannnerType2(props.index, props.data)}
    </>
  );
}
function BannnerType1(data) {
  return (
    <Box className="banner-page">
      {data.name == "first" ? floaterFirst(data) : floaterLast()}
    </Box>
  );
}

function floaterFirst(data) {
  return (
    <Box className="first-slider-page">
      <Box className="left-part">
        <Typography component={"h1"}>{data.middlePara}</Typography>
        <Typography component={"p"}>{data.rightText}</Typography>
      </Box>
      <img
        src={FloaterFirstImage}
        alt="Analyzing Data via PGI Tool"
        draggable={false}
      />
    </Box>
  );
}
function floaterLast() {
  return (
    <Box className="last-slider-page">
      <img
        src={FloaterLastImage}
        alt="District PGI Grading"
        draggable={false}
      />
    </Box>
  );
}

function BannnerType2(index, data) {
  return (
    <Box className="banner-page banner-page-type2">
      <img
        src={
          index == 2
            ? Floater2ndImage
            : index == 3
            ? Floater3rdImage
            : index == 4
            ? Floater4thImage
            : index == 5
            ? Floater5thImage
            : index == 6
            ? Floater6thImage
            : Floater7thImage
        }
        alt=""
        draggable={false}
      />
      <Box className="floater-type2-middle-part">
        <Box className="floater-middle-circle-info">
          <img
            src={
              index == 2
                ? Floater2ndSvgImage
                : index == 3
                ? Floater3rdSvgImage
                : index == 4
                ? Floater4thSvgImage
                : index == 5
                ? Floater5thSvgImage
                : index == 6
                ? Floater6thSvgImage
                : Floater7thSvgImage
            }
            draggable={false}
            alt=""
          />
          <Typography component={"h2"}>{data.name}</Typography>
          <Typography component={"p"}>{data.middlePara}</Typography>
        </Box>
        <Button className="floater-know-more-button">KNOW MORE</Button>
      </Box>

      <Typography component={"p"}>{data.rightText}</Typography>
    </Box>
  );
}
