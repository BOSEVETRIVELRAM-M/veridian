import { Box, Typography } from '@mui/material'
import React from 'react'
import "@fontsource/dm-sans";
import "@fontsource/ibm-plex-serif";
import MemberImg from "../../../assets/images/member.png"
import { Styles } from "./memberStyle"

export default function Member() {
  return (
    <Box sx={Styles.body}>
        <Typography sx={Styles.content}>
            Grahame Jackson is a Fellow of the Chartered Institute of a Taxation and a member of the Chartered Institute of Taxation's prestigious International Taxes Committee. Grahame has advised numerous international gaming companies in matters of taxation and is a regular adviser to other industries on matters of both domestic Gibraltar taxation and international taxation. 
        </Typography>

        <Typography sx={Styles.nxtContent}>
            He has written extensively on international information exchange mechanisms, the current international taxation reform in the context of the rule of law and British Overseas Territories and constitutional relationships between BOTs and the United Kingdom, and is the Head of the Tax Advisory Team and partner at Hassans.
        </Typography>
        <img src={MemberImg} alt="member img" style={Styles.memberImg}/>
        <Box sx={Styles.details}>
            <Typography sx={Styles.name}>Grahame Jackson</Typography>
        </Box>
    </Box>
  )
}
