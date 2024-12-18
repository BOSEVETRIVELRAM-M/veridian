import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Chairman from "../../screens/ourTeam/chairman/chairman.jsx";
import Advisor from "../../screens/ourTeam/advisor/advisor.jsx";
import Member from "../../screens/ourTeam/member/member.jsx";
import { Box, Typography } from '@mui/material';
import { Styles } from "./style.jsx";
import prevIcon from "../../assets/images/prevArrow.png";
import nextIcon from "../../assets/images/nextArrow.png";

export default function OurTeam() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <Typography sx={Styles.header}>Our Team</Typography>
      <Box sx={Styles.container}>
        {/* Custom Navigation Buttons */}
        <Box ref={prevRef}sx={{ ...Styles.navButton, ...Styles.prevArrow }}>
            <Box sx={Styles.arrowBox}>
                <img src={prevIcon} alt="Previous" style={Styles.arrowImage} />
            </Box>
        </Box>

        <Box ref={nextRef}  sx={{ ...Styles.navButton, ...Styles.nextArrow }}>
            <Box sx={Styles.arrowBox}>
                <img src={nextIcon} alt="Next" style={Styles.arrowImage} />
            </Box>
        </Box>


        {/* Swiper */}
        <Swiper
          slidesPerView={1.3}
          // centeredSlides={true}
          spaceBetween={70}
          loop={true}
          
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          modules={[Pagination, Navigation]}
          style={Styles.swiper}
        >
          <SwiperSlide><Chairman /></SwiperSlide>
          <SwiperSlide><Advisor /></SwiperSlide>
          <SwiperSlide><Member /></SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}
