// StyledComponents.jsx
import { styled } from "@mui/material/styles"

export const sharedStyles = {
   textTransform: "none",
   fontSize: "10pt",
   marginTop: "6px",
}

export const Div = styled("div")(({ theme, lcolor }) => ({
   ...theme.typography.button,
   ...sharedStyles,
   color: lcolor,
   marginTop: "-1px",
}))

export const Table = styled("table")(({ theme, lcolor }) => ({
   ...theme.typography.button,
   width: "640px",
   ...sharedStyles,
   color: lcolor,
}))

export const Tr = styled("tr")(({ theme, lcolor }) => ({
   ...sharedStyles,
   color: lcolor,
}))

export const Td = styled("td")(({ theme, lcolor }) => ({
   ...sharedStyles,
   color: lcolor,
}))

