import React from 'react';
import leftImg from "../../assets/images/contactUsLeft.png";
import rightImg from "../../assets/images/contactUsRight.png";
import nxtArrow from "../../assets/images/nextArrow.png";
import { Box, Divider, Typography } from '@mui/material';
import "@fontsource/dm-sans";
import "@fontsource/ibm-plex-serif";
import { Styles } from "./style"

export default function ContactUs() {
  const handleMailRedirect = () => {
    window.location.href = "mailto:info@veridian.com";
  };

  return (
    <Box>
      {/* Main Container */}
      <Box sx={Styles.body}>
        {/* Left Gradient Image */}
        <img src={leftImg} alt="left gradient" />

        {/* Center Content */}
        <Box sx={Styles.centerContent}>
          {/* Heading */}
          <Typography sx={Styles.header}>
            Contact Us
          </Typography>

          {/* Subheading */}
          <Typography sx={Styles.subHeader}>
            Have questions or need more information? Reach out to us at.
          </Typography>

          {/* Clickable Email Section */}
          <Box sx={Styles.email} onClick={handleMailRedirect}>
            {/* Yellow "MAIL TO" Label */}
            <Box sx={Styles. mailTo}>
              <Typography sx={Styles.mailTypo}>
                MAIL TO
              </Typography>
            </Box>

            {/* Email Address */}
            <Typography sx={Styles.mailId}>
              info@veridian.com
            </Typography>

            {/* Arrow Icon */}
            <Box sx={Styles.arrowBox}>
              <img src={nxtArrow} style={Styles.arrowImg} alt="Next Arrow" />
            </Box>
          </Box>
          <Typography sx={Styles.endTypo}>'We're help to help!'</Typography>
        </Box>

        {/* Right Gradient Image */}
        <img src={rightImg} alt="right gradient" />
      </Box>
    </Box>
  );
}
