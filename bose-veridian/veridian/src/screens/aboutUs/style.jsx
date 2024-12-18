import ArrowBackground from "../../assets/images/aboutUs.png";

export const Styles = {
    body: {
        backgroundColor: "#D9EFE9",
        textAlign: "center",
        position: "relative",
        backgroundImage: `url(${ArrowBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center bottom",
        width: "1175px",
        margin: "50px auto auto auto"
    },

    header: {
        fontFamily: "IBM Plex",
        fontWeight: 700,
        fontSize: "32px",
        color: "#091B29",
        paddingBottom: "20px",
        paddingTop: "35px"
    },

    card: {
        width: {lg: "1025px", xs: "295px"},
        height: {lg: "275px", xs: "555px"},
        backgroundColor: "#FFFFFF",
        marginLeft: {lg: "70px", xs: "10px"},
        marginRight: {lg: "0px", xs: "10px"},
        borderRadius: "0px",
        boxShadow: "none"
    },

    veridianLogo: {
        width: "205px",
        height: "140px",
        objectFit: "contain",
        marginTop: {lg: "47px", xs: "20px"},
        marginLeft: {lg: "70px", xs: "15px"},
        marginBottom: {lg: "0px", xs: "-2px"},
        padding: "20px 30px",
        backgroundColor: "#e1f0ed",
    },

    para:{
        fontFamily: "DM Sans",
        fontSize: "12px",
        fontWeight: 400,
        color: "#51585E",
        textAlign: "left",
        paddingTop: {lg: "33px", xs: "-20px"},
        paddingLeft: {lg: "65px", xs: "1px"},
        paddingRight: {lg: "35px", xs: "1px"}
    },

    nxtpara: {
        fontFamily: "DM Sans",
        fontSize: "12px",
        fontWeight: 400,
        color: "#51585E",
        textAlign: "left",
        paddingTop: "15px",
        paddingLeft: {lg: "65px", xs: "1px"},
        paddingRight: {lg: "25px", xs: "0px"}
    },

    container: {
        marginTop: "3px",
        marginLeft: {lg: "70px", xs: "10px"},
        marginRight: "50px",
        paddingBottom: "100px",

    },

    subCards: {
        width: {lg: "500px", xs: "295px"},
        height: {lg: "150px", xs: "285px"},
        borderRadius: "0px",
        boxShadow: "none"
    },

    content: {
        paddingLeft: {lg: "25px", xs: "15px"},
        paddingRight: {lg: "35px", xs: "30px"},
    },

    title: {
        fontFamily: "IBM Plex Serif",
        fontWeight: 520,
        fontSize: "18px",
        color: "#091B29",
        textAlign: "left",
        paddingBottom: "10px",
        paddingTop: {lg: "0px", xs: "115px"},
    },

    // details: {
    //     display: "flex",
    //     flexDirection: "row",
    //     textAlign: "left"
    // },
    
    text: {
        fontFamily: "DM Sans",
        fontWeight: 400,
        fontSize: "13px",
        color: "#51585E",
        lineHeight: "20px",
        paddingRight: {lg: "70px", xs: "-100px"},
        textAlign: "left"
    },



    iconBox: {
        position: "relative",
        bottom: {lg: "90px", xs: "260px"},
        left: {lg: "200px", xs: "-80px"},
        color: "#FFB703",
        fontSize: "50px",
        marginBottom: "10px",
        
    },

    icon: {
        width: {lg: "77px", xs: "120px"},
        height: {lg: "80px", xs: "120px"}
    }
}