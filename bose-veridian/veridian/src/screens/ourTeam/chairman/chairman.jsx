import { Box, Typography } from '@mui/material'
import React from 'react'
import "@fontsource/dm-sans";
import "@fontsource/ibm-plex-serif";
import ChairmanImg from "../../../assets/images/chairman.png"
import { Styles } from "./chairmanStyle.jsx"

export default function Chairman() {
  return (
    <Box sx={Styles.body}>
        <Typography sx={Styles.content}>
            Julian is an experienced lawyer, businessman and investor with over 25 years of start-up, private and public company experience. In the internet and iGaming industries – including America Online Inc., AOL Time Warner Inc., PartyGaming Plc and other companies. Julian has a focus on fast growth companies in emerging regulatory environments. Julian's current focus is as CEO and co-founder of Pragmatic Play, a leading multi-award winning supplier to the international iGaming and betting industries.
        </Typography>
        <img src={ChairmanImg} alt="chairman img" style={Styles.chairmanImg}/>
        <Box sx={Styles.details}>
            <Typography sx={Styles.name}>Julian Jarvis</Typography>
            <Typography sx={Styles.designation}>Chairman, Founder and CEO</Typography>
        </Box>
    </Box>
  )
}
