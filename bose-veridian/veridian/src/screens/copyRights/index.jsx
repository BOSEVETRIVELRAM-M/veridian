import { Box, Typography } from '@mui/material'
import React from 'react'
import { Styles } from "./style.jsx"

export default function CopyRights() {
  return (
    <Box sx={Styles.container}>
        <Typography sx={Styles.copyrights}>COPYRIGHT © Veridian 2024. All rights reserved. Any and all content included on this website or incorporated by reference is protected by international copyright laws.</Typography>
        <Typography sx={Styles.terms}>Term of use</Typography>
    </Box>
  )
}
