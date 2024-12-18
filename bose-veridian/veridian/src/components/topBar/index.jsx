import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import VeridianLogo from "../../assets/images/VeridianLogo.png";
import { scroller, Element } from "react-scroll";
import { Styles } from "./style.jsx";
import Home from "../../screens/home/index";
import AboutUs from "../../screens/aboutUs/index";
import OurTeam from "../../screens/ourTeam/index.jsx";
import HolisticInvestment from "../../screens/investmentApproach/index.jsx";
import ContactUs from "../../screens/contactUs/index.jsx";
import Copyrights from "../../screens/copyRights/index.jsx";

export default function Navbar() {
  // State to track the active tab
  const [value, setValue] = React.useState("1");

  // Handle tab change and scroll to the section
  const handleChange = (event, newValue) => {
    setValue(newValue);

    // Scroll to the correct section based on the value
    scroller.scrollTo(`section-${newValue}`, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -100,
    });
  };

  return (
    <Box>
      <TabContext value={value}>
        {/* Navigation */}
        <Box sx={Styles.navBox}>
          <img src={VeridianLogo} alt="Veridian Logo" style={Styles.logo} />

          <TabList onChange={handleChange} aria-label="Navigation Tabs" sx={Styles.tabList}
            TabIndicatorProps={{
              style: { backgroundColor: "#009065" },
            }}
          >
            <Tab label="Home" value="1" aria-label="Home Tab" />
            <Tab label="About Us" value="2" aria-label="About Us Tab" />
            <Tab label="Our Team" value="3" aria-label="Our Team Tab" />
            <Tab label="Investment Approach" value="4" aria-label="Investment Approach Tab" />
            <Tab label="Contact Us" value="5" aria-label="Contact Us Tab" />
          </TabList>
        </Box>

        {/* Sections */}
        <Box>
          <Element name="section-1">
            <Home />
          </Element>
          <Element name="section-2">
            <AboutUs />
          </Element>
        </Box>

        <Box sx={Styles.teamBox}>
          <Element name="section-3">
            <OurTeam />
          </Element>
          <Element name="section-4">
            <HolisticInvestment />
          </Element>
        </Box>

        <Box
          sx={Styles.contactBox}>
          <Element name="section-5">
            <ContactUs />
          </Element>
        </Box>
        <Copyrights />
      </TabContext>
    </Box>
  );
}
