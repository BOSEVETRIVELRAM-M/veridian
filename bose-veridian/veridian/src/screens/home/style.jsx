import "@fontsource/dm-sans"; 
import "@fontsource/ibm-plex-serif";




export const Styles = {
    background: {
        position: "relative",
        width: {lg: "1175px",},
        height: {lg: "540px", xs: "540px"}, 
        backgroundColor: "#009065",
        overflow: "hidden",
        margin: "60px auto auto auto",
    },

    leftImg: {
        position: "absolute",
        left: 0,
        top: 0,
        width: "470px",
        height: "100%",
        zIndex: 1,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        overflow: "hidden"
    },

    rightImg: {
        position: "absolute",
        right: 0,
        top: 0,
        width: "470px",
        height: "540px",
        zIndex: 1,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        overflow: "hidden"
    },

    centerContent: {
        position: "relative",
        zIndex: 2,
        textAlign: "center",
        color: "white",
        alignItems: "center",
        justifyContent: "center"
    },

    investTypo: {
        border: "none",
        backgroundColor: "#F9C300",
        display: "inline-flex",
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingTop: "3px",
        paddingBottom: "1px",
        position: "relative",
        top: "120px",
        '& .MuiTypography-root': {
            fontFamily: "DM Sans",
            fontWeight: 800,
            fontSize: "12px",
            color: "#FFFFFF",
            textAlign: "center",
        }
        
    },

    heading: {
        paddingTop: {lg:"20px", xs: "30px"},
        paddingBottom: "20px",
        paddingLeft: {lg:"190px", xs: "25px"},
        paddingRight: {lg:"165px", xs: "35px"},
        position: "relative",
        top: "100px",
        fontFamily: "IBM Plex Serif",
        fontWeight: 700,
        fontSize: {lg:"40px", xs: "28px"},
        color: "#F5F7FA",
        textAlign: "center",
    },

    btn: {
        border: "none",
        backgroundColor: "#0000004D",
        display: "inline-flex",
        paddingLeft: "30px",
        paddingRight: "20px",
        paddingTop: "10px",
        paddingBottom: "15px",
        fontFamily: "DM Sans",
        fontWeight: 600,
        fontSize: "18px",
        color: "#FFFFFF",
        lineHeight: "20px",
        textAlign: "center",
        position: "relative",
        top: "120px"
    },

    btnArrow: {
        paddingLeft: "10px",
        paddingTop: "5px",
        paddingRight: "10px",
        width: "15px",
        height: "15px",
        fontFamily: "DM Sans",
        fontWeight: 600,
        fontSize: "18px",
        color: "#FFFFFF",
        textAlign: "center",
    }
}