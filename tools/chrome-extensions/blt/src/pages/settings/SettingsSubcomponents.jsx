// SettingsSubcomponents.jsx
import PropTypes from "prop-types"
import { Div } from "./StyledComponents"
import { Container, Link, Tabs, Tab, Grid, Button } from "@mui/material"

export function SettingsHeader({ tabSet, handleTabChange, lcolor }) {
   const linkStyle = { textShadow: "none", textDecoration: "none", color: lcolor, "&:hover": { color: lcolor } }
   const chromeDeveloperDashboardLink = "https://chrome.google.com/webstore/developer/dashboard"
   const tabMargins = { marginLeft: "18px", marginRight: "18px" }
   const tabStyle = { fontSize: "10pt", textTransform: "none" }

   return (
      <>
         <Container sx={{ margin: "8px 8px 0px 0px" }}>
            <Div lcolor={lcolor}>
               <Link sx={linkStyle} href={chromeDeveloperDashboardLink}>
                  Settings
               </Link>
            </Div>
         </Container>
         <Tabs value={tabSet} onChange={handleTabChange} aria-label="settings tabs" sx={tabMargins}>
            <Tab label="General" sx={tabStyle} />
            {/* <Tab label="Links" sx={tabStyle} /> */}
         </Tabs>
      </>
   )
}

SettingsHeader.propTypes = {
   tabSet: PropTypes.any.isRequired,
   handleTabChange: PropTypes.func.isRequired,
   lcolor: PropTypes.string.isRequired
}


export function SettingsFooter({ handleCancel, handleUpdate, handleReset }) {
   const button1 = { height: 18, textTransform: "none", marginLeft: "380px", textAlign: "center", marginTop: "6px", }
   const button2 = { textTransform: "none", padding:0, fontSize: "10pt", fontWeight: 600, textAlign: "center", marginLeft: "22px" }

   return (
      <Grid item sx={button1}>
         <Button sx={button2} variant="contained"  size="small" color="primary" onClick={handleReset}>Reset</Button>
         <Button sx={button2} variant="contained" size="small"  color="primary" onClick={handleCancel}>Cancel</Button>
         <Button sx={button2} variant="contained"  size="small" color="success" onClick={handleUpdate}>Update</Button>
      </Grid>
   )
}

SettingsFooter.propTypes = {
   handleCancel: PropTypes.func.isRequired,
   handleUpdate: PropTypes.func.isRequired,
   handleReset: PropTypes.func.isRequired
}