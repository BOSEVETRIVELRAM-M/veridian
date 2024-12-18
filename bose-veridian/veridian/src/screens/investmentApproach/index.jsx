import React from "react";
import "@fontsource/ibm-plex-serif";
import "@fontsource/dm-sans";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import InvestmentImg from "../../assets/images/investment.png"
import PortfolioImg from "../../assets/images/portfolio.png"
import CorporateImg from "../../assets/images/corporate.png"
import { Styles } from "./style.jsx";


export default function HolisticInvestment() {
  return (
    <Box sx={Styles.body}>
      <Typography sx={Styles.header}>
        Holistic Investment Approach
      </Typography>
      <Grid container spacing={1}>
        {/* Investment Focus and Strategy */}
        <Grid item xs={12} sm={6} md={4}>
          <Card  sx={Styles.investmentCard}>
            <CardContent sx={Styles.cardContent}>
                <img src={InvestmentImg} alt="investment img" style={Styles.investmentImg}/>
              <Typography sx={Styles.title}>
                Investment focus and strategy
              </Typography>
              <Typography sx={Styles.detail}>
                Veridian focuses on companies across a number of different sectors, predominantly internet-based companies with long term growth potential, with the aim of releasing the potential of businesses, sustainably improving operations and generating significant growth and profitability.
              </Typography>
              <Typography sx={Styles.nxtDetail}>
                Our investment strategy creates value at every stage of an investment. Utilizing the strengths of our industry experienced team, Veridian has crafted a streamlined process from identifying potential opportunities through due diligence and deal documentation and onward to integration and transformation. Veridian’s unique combination of people and processes is market-tested to generate and release significant value and growth.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Portfolio */}
        <Grid item xs={12} sm={6} md={4}>
          <Card  sx={Styles.portfolioCard}>
            <CardContent sx={Styles.cardContent}>
                <img src={PortfolioImg} alt="portfolio img" style={Styles.portfolioImg}/>
              <Typography sx={Styles.title}>
                Portfolio
              </Typography>
              <Typography sx={Styles.portfolioDetail}>
                The central investment of Veridian is in the Pragmatic Play group of companies headed by Tamaris (Gibraltar) Limited. Pragmatic Play is a world-leading game developer providing player-favourites to the most successful global brands in the iGaming industry.
              </Typography>
              <Typography sx={Styles.nxtDetail}>
                 Powering up new possibilities of play through one single API, Pragmatic Play offers a multi-product portfolio of award-winning slots, live casino, bingo, virtual sports, sportsbook and more, available in all major regulated markets, languages and currencies. Driven by persistence to craft immersive experiences and responsible thrills, Pragmatic Play’s professional team consistently deliver best in class services to its partners worldwide with a dedication to creating games that players love time and time again.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Corporate Social Responsibility */}
        <Grid item xs={12} sm={6} md={4}>
          <Card  sx={Styles.corporateCard}>
            <CardContent sx={Styles.cardContent}>
                <img src={CorporateImg} alt="corporate img" style={Styles.corporateImg}/>
              <Typography sx={Styles.title}>
                Corporate social responsibility
              </Typography>
              <Typography sx={Styles.corporateDetail}>
                 Veridian supports responsible investing and evaluates environmental, social and governance issues in its investments. Veridian believes that responsible investing and return on investment go together, and consideration of ESG issues improves portfolio company performance and investment results.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

