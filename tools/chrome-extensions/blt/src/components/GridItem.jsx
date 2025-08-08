import PropTypes from "prop-types"
import { useTheme } from "@mui/material/styles"
import { Link, Divider,Stack,Tooltip } from "@mui/material"
import { styled } from '@mui/material/styles'

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  textTransform: 'none',
  marginTop: "-1px",
  color: theme.palette.mode === "dark" ? "lightblue" : "#1b2051",
  fontSize: "8pt",
}))

CardItem.propTypes = {  dto: PropTypes.object  }

export default function CardItem({ dto }) {
   const theme = useTheme()
   const itHas = (o,k) => Object.prototype.hasOwnProperty.call(o, k)

   const blink = {
      padding: "3px",
      textDecoration: "none",
      textShadow: "none",
      textTransform: "none",
      fontFamily: "mukta",
      fontSize: "8.5pt",
      fontWeight: 500,
      color: theme.palette.mode === "dark" ? "white" : dto.basecolor,
      "&:hover": {
         color: theme.palette.mode === "dark" ? "rgb(76,249,77)" : "white",
         backgroundColor: theme.palette.mode === "dark" ? "rgba(128,128,128,0.5)" : "green",
         textDecoration: "none",
         cursor: "hand",
      }
   }
   const blink2 = {
      color: theme.palette.mode === "dark" ? "lightblue" : "green",
      marginTop: "0px"
   }

 const showRows = (o, idx) => {

   const showCol = (pre, post, title, href, target, name) => {
      return (
         <>
            <Div>{pre}</Div>
            <Tooltip title={title ?? href} arrow>
               <Link sx={blink} href={href} target={target ?? "_blank"} >
                  {name}
               </Link>
            </Tooltip>
            <Div>{post}</Div>
         </>
      )
   }


  return (
    <Stack direction="row" alignItems="left" key={idx} sx={{ textAlign: "left",width: "100%",marginTop:"-1px" }}>
      {itHas(o, "label") && o.label.startsWith("-" ) ? (
        <Divider sx={{ fontSize: "8.5pt", marginTop: "3px", marginBottom: "3px",height:"1px", backgroundColor:"#ccc" }}>
         ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</Divider>
      ) : (
        <>
          {itHas(o, "name1") &&
            o.name1.startsWith("-") ? (
            <>
            <Divider key={idx} sx={{ fontSize: "8.5pt", marginTop: "8px", marginBottom: "3px",height:"1px", backgroundColor:"#ccc" }}> ㅤㅤㅤㅤ</Divider>
            <Tooltip title={o.title1 ?? o.href1} >
            <Link sx={{...blink, padding:"8px",lineHeight:"0.1"}} key={idx + "2"} href={o.href1} target={o.target1 ?? "_blank"} >
                  ㅤ{o.name1.substring(1)}ㅤ
            </Link>
            </Tooltip>

            <Divider sx={{ fontSize: "8.5pt", marginTop: "8px", marginBottom: "1px",height:"1px", backgroundColor:"#ccc" }}> ㅤㅤㅤㅤ</Divider></>) : (
            <>
              {o.pre1!==undefined && o.pre1.startsWith("~") ? (<Div sx={blink2}>{ o.pre1.substring(1) }</Div>) : (<Div>{ o.pre1 }</Div>)}
              <Tooltip title={o.title1 ?? o.href1} arrow>
              <Link sx={blink} href={o.href1} target={o.target1 ?? "_blank"} >
                {o.name1}
              </Link>
              </Tooltip>
              <Div>{o.post1}</Div>
            </>
          )}
          {itHas(o, "name2") && showCol(o.pre2, o.post2, o.title2, o.href2, o.target2, o.name2)}
          {itHas(o, "name3") && showCol(o.pre3, o.post3, o.title3, o.href3, o.target3, o.name3)}
          {itHas(o, "name4") && showCol(o.pre4, o.post4, o.title4, o.href4, o.target4, o.name4)}
        </>
      )}
    </Stack>
  )
}
   return (
   <>
   {itHas(dto,"links") && dto.links.map((o,idx) => ( showRows(o,idx)))}
   </>
   )
}