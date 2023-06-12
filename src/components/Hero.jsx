import React from 'react'

import { Box,Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import bg1 from '../assets/bg1.jpg'
import bg2 from '../assets/bg2.jpg'
import bg3 from '../assets/bg3.jpg'
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const items = [bg1,bg2,bg3];
const CarouselItem = ({ item = {},idx }) => {
    return (
      <Box
        sx={{
          height: { xs: "30vh", lg: "50vh" },
          // maxHeight:{xs:"180px", lg:"420px"},
          width: "100%",
        }}
      >
        <img
          src={item}
          style={{ width: "100%", height: "100%" }}
          loading="lazy"
          />
      </Box>
    );
  };
const Hero = () => {
  return (
    <div>
        <Box>
            <Carousel
                NextIcon={<ArrowForwardIosIcon />}
                PrevIcon={<ArrowBackIosNewIcon />}
                // indicators={false}
            >
                {items.map((item, i) =>(
                    <CarouselItem key={i} item={item} idx={i} />
                ))}
            </Carousel>
        </Box>
    </div>
  )
}

export default Hero