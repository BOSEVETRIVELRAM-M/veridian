export const Styles = {
    body: {
        width: "820px",
        height: "390px",
        backgroundColor: "white",
        marginLeft: {lg: "210px", xs: "10px"},
        marginTop: "20px",
        transform: {lg: "skew(-25deg)", xs: "none"}
    },

    content: {
        textAlign: "left", 
        paddingTop:"50px", 
        fontFamily: "DM Sans", 
        fontWeight: 400, 
        fontSize: "14px", 
        lineHeight: "20px", 
        color: "#717B85", 
        paddingRight: "80px",
        paddingLeft: "240px", 
        transform: {lg: "skew(25deg)", xs: "none"},
        display: "flex"
    },

    chairmanImg: {
        width: "300px",
        height: "304px",
        marginRight: {lg: "650px", xs: "10px"},
        marginTop: "-104px",
        position: "relative",
        zIndex: 2,
        transform: {lg: "skew(25deg)", xs: "none"},
        
    },

    details: {
        backgroundColor: "#009065",
        width: "300px",
        height: "65px",
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        marginLeft: "270px",
        marginTop: "-90px",
        transform: "skew(-35deg)",
        position: "relative",
        zIndex: 1
    },

    name: {
        fontFamily: "IBM Plex Serif",
        fontSize: "18px",
        fontWeight: 500,
        lineHeight: "22px",
        color: "White",
        paddingLeft: "60px",
        paddingBottom: "5px",
        paddingTop: "10px",
        transform:  "skew(50deg)"
    },

    designation: {
        fontFamily: "DM Sans",
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: "20px",
        color: "White",
        paddingLeft: "104px",
        paddingBottom: "15px",
        whiteSpace: "nowrap",
        transform: "skew(50deg)"
    }
}