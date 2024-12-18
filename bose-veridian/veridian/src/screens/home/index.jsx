import * as React from 'react';
import { Box, Typography, Button } from '@mui/material';
import DownArrow from "../../assets/images/downArrow.png"
import { Styles } from './style';
import HomeLeft from "../../assets/images/homeLeft.png"
import HomeRight from "../../assets/images/homeRight.png"

export default function Background() {
  return (
    <Box sx={Styles.background}>
        {/* Left Image */}
        <Box sx={Styles.leftImg}><img src={HomeLeft} alt='left image' /></Box>
        
        {/* Right Image */}
        <Box sx={Styles.rightImg}><img src={HomeRight} alt='right image' /></Box>

        {/* Centered Content */}
        <Box sx={Styles.centerContent}>
            <Box sx={Styles.investTypo}>
                <Typography>INVESTMENT MANAGEMENT</Typography>
            </Box>
            <Typography sx={Styles.heading}>
            Empowering Investments with Expertise
            <Box component="br"></Box>
            and Strategy
            </Typography>
            <Typography variant="contained" sx={Styles.btn}>
                Know more
                <img src={DownArrow} style={Styles.btnArrow} alt="Arrow Icon" />
            </Typography>
        </Box>
    </Box>
  );
}