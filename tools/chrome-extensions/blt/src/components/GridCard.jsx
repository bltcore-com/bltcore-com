import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
import { useTheme } from "@mui/material/styles"
import { Card, CardHeader, CardContent, CardActionArea } from "@mui/material"
import { Link, Divider, Button } from "@mui/material"
import GridItem from "./GridItem"

const basecolor = "#1b2051"

export default function GridCard({ dto }) {
   const navigate = useNavigate()
   const theme = useTheme()
   dto.basecolor = basecolor

   const getTitle = () => {
      return (
        <Link title={dto.tootip1 ?? dto.href1} href={dto.href1} target={dto.target1 ?? "_blank"} sx={{
         fontSize: "9.5pt",
         fontWeight: 500,
         color: theme.palette.mode === "dark" ? "lightblue" : "seagreen",
         textDecoration: "none",
         textShadow: "none",
         "&:hover": {
           color: theme.palette.mode === "dark" ? "rgb(76,249,77)" : "white",
           backgroundColor: theme.palette.mode === "dark" ? "#777" : "green",
           fontWeight: "bold",
           textDecoration: "none",
           cursor: "pointer"
         }
        }}>
            {dto.title}{dto.title1}
        </Link>
      )
    }

    const getSubTitle = () => {
      const subtitle = dto.title2 ?? " ⛭ "
      const style = {
         color: theme.palette.mode === "dark" ? "lightblue" : "seagreen",
         float: "right",
         minWidth: "12px",
         fontSize: "9.5pt",
         lineHeight: "0.5",
         marginTop: "-22px",
         textDecoration: "none",
         textTransform: "none",
         verticalAlign: "text-bottom",
         textShadow: "none",
         "&:hover": {
           outline: "none",
           textDecoration: "none",
           color: theme.palette.mode === "dark" ? "rgb(76,249,77)" : "white",
           backgroundColor: theme.palette.mode === "dark" ? "#777" : "green",
           cursor: "pointer"
         }
       }

      return !Object.prototype.hasOwnProperty.call(dto, "href2") ? ( subtitle ) : dto.href2.startsWith("*") ? (
         <Button variant="text" sx={style} onClick={() => { navigate(dto.href2.substring(1))}} >
            {subtitle}
         </Button>
      ) : (
        <Button variant="text" sx={style} onClick={() => { window.open(dto.href2) }}>
          {subtitle}
        </Button>
      )
    }

   return (
      <Card sx={{boxShadow:"0px 2px 1px -2px", marginTop:"4px",marginBottom:"2px",maxHeight:"168px", border: theme.palette.mode === "dark" ? "1px solid #555" : "none",}}>
         <CardHeader title={getTitle()} subheader={getSubTitle()} sx={{padding: "6px",height: "22px"}} />
         <Divider sx={{ marginTop: "2px", marginBottom: "3px" }} />
         <CardContent sx={{padding:"2px",lineHeight:"1.0"}}>
            <GridItem dto={dto} />
         </CardContent>
         <CardActionArea/>
      </Card>
   )
}

GridCard.propTypes = { dto: PropTypes.object }
