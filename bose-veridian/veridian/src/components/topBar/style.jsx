import "@fontsource/dm-sans";  // or import specific weights
import "@fontsource/ibm-plex-serif";

export const Styles = {
    navBox: {
        position: 'sticky',
        top: 0,
        backgroundColor: 'white',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: "1px solid #CACFDB",
        paddinTop: "20px",
        paddingBottom: "0px",
        display: "flex",
        
    },

    logo: {
        width: '80px',
        height: '80px',
        paddingLeft: "160px"
    },

    tabList: {
      '& .MuiTab-root': {
          fontFamily: "IBM Plex Serif",
          fontSize: '16px',
          fontWeight: 500,
          color: '#51585E',
          textTransform: "none",
          lineHeight: "22px"
      },
    
      '& .css-1usuzwp-MuiButtonBase-root-MuiTab-root.Mui-selected': {
        color:" #009065",
        fontFamily: 'IBM Plex Serif',
        fontSize: '16px',
        fontWeight: 500,
        textTransform: 'none',
        lineHeight: '22px',
      },
      
      '& .MuiTabs-indicator': {
          backgroundColor: '#009065',
          height: '4px', 
          width: '60%', 
          left: '20%', 
          borderRadius: '2px', 
          transition: 'all 0.3s ease', 
      },
      display: 'flex',
      justifyContent: 'space-between',
      flex: 1,
      paddingLeft: "200px",
      paddingBottom: "35px",
      paddingTop: "10px",
      flexDirection: "column"
  },
  
  teamBox: {
    backgroundColor: "#d9efe8",
    width: "1175px",
    margin: "auto",
  },

  contactBox: {
    backgroundColor: "#009065",
    width: "1175px",
    margin: "auto",
  }
  
}