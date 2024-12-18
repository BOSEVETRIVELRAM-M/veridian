import { Box, Typography } from '@mui/material'
import React from 'react'
import "@fontsource/dm-sans";
import "@fontsource/ibm-plex-serif";
import AdvisorImg from "../../../assets/images/advisor.png"
import { Styles } from "./advisorStyle"

export default function Advisor() {
  return (
    <Box sx={Styles.body}>
        <Typography sx={Styles.content}>
            Peter Montegriffo KC has been closely involved in advising major financial services and e-commerce operators establishing a presence in Gibraltar and expanding their activities internationally. This has included working with investment groups and private client family offices.In his capacity as a Consultant at Hassans and member of the firm’s Corporate & Commercial team for over 35 years, Peter’s area of expertise is in Gibraltar and international commercial and private client matters. 
        </Typography>

        <Typography sx={Styles.nxtContent}>
            Peter has worked on a number of public listings on the London Stock Exchange. He continues to advise on restructuring, merger and consolidation exercises. He has also been involved in drafting numerous changes to Gibraltar’s legislation in trusts, financial services and gaming. Peter was Gibraltar’s Minister for Trade and Industry, with responsibility for economic development and financial services, between May 1996 and February 2000.  Peter was appointed KC in Gibraltar in June 2014.   
        </Typography>
        <img src={AdvisorImg} alt="advisor img" style={Styles.advisorImg}/>
        <Box sx={Styles.details}>
            <Typography sx={Styles.name}>Peter Montegriffo KC</Typography>
        </Box>
    </Box>
  )
}
