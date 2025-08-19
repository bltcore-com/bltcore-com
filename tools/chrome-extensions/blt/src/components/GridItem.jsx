import PropTypes from "prop-types"
import { useEffect, useState } from "react"
import { useTheme } from "@mui/material/styles"
import { Link, Divider, Stack, Tooltip, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from "@mui/material"
import { styled } from '@mui/material/styles'

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  textTransform: 'none',
  marginTop: "-1px",
   color: theme.palette.mode === "dark" ? "rgb(76,249,77)" : "#1b2051",
  fontSize: "8pt",
}))

CardItem.propTypes = {  dto: PropTypes.object  }

export default function CardItem({ dto }) {
   const theme = useTheme()
   const itHas = (o,k) => Object.prototype.hasOwnProperty.call(o, k)

   const extractUrlFromPre = (value) => {
      if (!value || typeof value !== "string") return null
      const trimmed = value.trim()
      const match = trimmed.match(/^\(\s*(https?:\/\/[^)]+?)\s*\)$/)
      return match ? match[1] : null
   }

   // Heuristic removed; we optimistically render <img> and only fetch after an error

   const RemoteContent = ({ url }) => {
      const [text, setText] = useState("")
      const [isText, setIsText] = useState(false)
      const [hideImg, setHideImg] = useState(false)
      const [blobUrl, setBlobUrl] = useState(null)
      // Removed unused showImageByExt; rely on <img> onError to decide when to fetch

      useEffect(() => {
         let isMounted = true
         let revokeUrl = null
         if (!url) return () => { }
         // Only attempt fetch when image load has failed. This avoids cross-origin fetches for
         // image URLs (e.g., favicon services without file extensions) and prevents CORS errors.
         if (!hideImg) return () => { }
            ; (async () => {
               try {
                  const res = await fetch(url)
                  const contentType = res.headers.get("content-type") || ""
                  if (contentType.startsWith("image/")) {
                     const blob = await res.blob()
                     if (!isMounted) return
                     const localUrl = URL.createObjectURL(blob)
                     revokeUrl = localUrl
                     setBlobUrl(localUrl)
                     return
                  }
                  const looksText = contentType.includes("text/") || contentType.includes("json")
                  const body = looksText ? await res.text() : ""
                  if (!isMounted) return
                  if (looksText) {
                     setIsText(true)
                     setText(body)
                  }
               } catch (_) {
                  // ignore
               }
            })()
         return () => {
            isMounted = false
            if (revokeUrl) {
               URL.revokeObjectURL(revokeUrl)
            }
         }
      }, [url, hideImg])

      if (!url) return null
      if (blobUrl) {
         return (
            <> <Div>ㅤㅤ</Div>
               <img
                  src={blobUrl}
                  alt=""
                  style={{ height: "16px", width: "16px", verticalAlign: "middle" }}
               />
            </>
         )
      }
      if (!hideImg) {
         return (
            <img
               src={url}
               alt=""
               style={{ height: "16px", width: "16px", verticalAlign: "middle" }}
               onError={() => setHideImg(true)}
            />
         )
      }
      if (isText) {
         const trimmed = text.length > 120 ? `${text.slice(0, 117)}...` : text
         return (<>{trimmed}</>)
      }
      return null
   }

   RemoteContent.propTypes = { url: PropTypes.string }

   const renderPre = (value, href, title, target) => {
      if (value === undefined || value === null) return <Div>{value}</Div>
      if (typeof value === "string" && value.startsWith("~")) {
         const text = value.substring(1)
         // If there's an associated href, make it clickable
         if (href) {
            return (
               <Tooltip title={title ?? href} arrow>
                  <Link sx={blink} href={href} target={target ?? "_blank"}>
                     <Div sx={blink2}>{text}</Div>
                  </Link>
               </Tooltip>
            )
         }
         return <Div sx={blink2}>{text}</Div>
      }
      const url = extractUrlFromPre(value)
      if (url) {
         return <Div>{<RemoteContent url={url} />}</Div>
      }
      return <Div>{value}</Div>
   }

   const blink = {
      padding: "3px",
      textDecoration: "none",
      textShadow: "none",
      textTransform: "none",
      fontFamily: "mukta",
      fontSize: "9pt",
      fontWeight: 500,
      color: theme.palette.mode === "dark" ? "white" : dto.basecolor,
      "&:hover": {
         color: theme.palette.mode === "dark" ? "rgb(76, 249, 77)" : "white",
         backgroundColor: theme.palette.mode === "dark" ? "rgba(128,128,128,0.5)" : "green",
         textDecoration: "none",
         cursor: "hand",
      }
   }
   const blink2 = {
      color: theme.palette.mode === "dark" ? "rgb(76, 249, 77)1" : "green",
      marginTop: "0px"
   }

   const renderTable = () => {
      if (!itHas(dto, "links") || dto.showas !== "table") {
         return null
      }

      const tableStyle = {
         fontSize: "9pt",
         fontFamily: "mukta",
         fontWeight: 500,
         color: theme.palette.mode === "dark" ? "white" : dto.basecolor,
      }

      const cellStyle = {
         padding: "2px 4px",
         border: "none",
         textAlign: "center",
         ...tableStyle
      }

      return (
         <TableContainer component={Paper} sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
            <Table size="small" sx={{ borderCollapse: "collapse" }}>
               <TableBody>
                  {dto.links.map((row, rowIdx) => {
                     const derivedRowKey = (row && (row.label || row.name1 || row.href1)) ? `${row.label || row.name1 || row.href1}-${rowIdx}` : `row-${rowIdx}`
                     // Check if row has any content
                     const hasContent = [1, 2, 3, 4].some(colNum => {
                        const nameKey = `name${colNum}`
                        return itHas(row, nameKey) && row[nameKey] && row[nameKey].trim() !== ""
                     })

                     // If row is empty, render as empty div
                     if (!hasContent) {
                        return <div key={`${derivedRowKey}-empty`} style={{ height: "8px" }} />
                     }

                     return (
                        <TableRow key={derivedRowKey} sx={{ border: "none" }}>
                           {[1, 2, 3, 4].map((colNum) => {
                              const nameKey = `name${colNum}`
                              const hrefKey = `href${colNum}`
                              const titleKey = `title${colNum}`
                              const targetKey = `target${colNum}`

                              if (!itHas(row, nameKey) || !row[nameKey] || row[nameKey].trim() === "") {
                                 return <TableCell key={colNum} sx={cellStyle} />
                              }

                              const isLink = itHas(row, hrefKey) && row[hrefKey]
                              const content = row[nameKey]

                              return (
                                 <TableCell key={colNum} sx={cellStyle}>
                                    {isLink ? (
                                       <Tooltip title={row[titleKey] ?? row[hrefKey]} arrow>
                                          <Link
                                             sx={{
                                                ...blink,
                                                padding: "2px",
                                                textDecoration: "none",
                                                color: "inherit"
                                             }}
                                             href={row[hrefKey]}
                                             target={row[targetKey] ?? "_blank"}
                                          >
                                             {content}
                                          </Link>
                                       </Tooltip>
                                    ) : (
                                       content
                                    )}
                                 </TableCell>
                              )
                           })}
                        </TableRow>
                     )
                  })}
               </TableBody>
            </Table>
         </TableContainer>
      )
   }

 const showRows = (o, idx) => {

   const showCol = (pre, post, title, href, target, name) => {
      return (
         <>
            {renderPre(pre, href, title, target)}
            {name && (
               <Tooltip title={title ?? href} arrow>
                  <Link sx={blink} href={href} target={target ?? "_blank"} >
                     {name}
                  </Link>
               </Tooltip>
            )}
            <Div>{post}</Div>
         </>
      )
   }


  return (
     <Stack direction="row" alignItems="left" key={`row-${idx}-${o.label || o.name1 || o.href1 || ''}`} sx={{ textAlign: "left", width: "100%", marginTop: "-1px" }}>
      {itHas(o, "label") && o.label.startsWith("-" ) ? (
        <Divider sx={{ fontSize: "8.5pt", marginTop: "3px", marginBottom: "3px",height:"1px", backgroundColor:"#ccc" }}>
         ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</Divider>
      ) : (
        <>
          {itHas(o, "name1") &&
            o.name1.startsWith("-") ? (
            <>
                          <Divider key={`div-top-${idx}`} sx={{ fontSize: "8.5pt", marginTop: "8px", marginBottom: "3px", height: "1px", backgroundColor: "#ccc" }}> ㅤㅤㅤㅤ</Divider>
            <Tooltip title={o.title1 ?? o.href1} >
                             <Link sx={{ ...blink, padding: "8px", lineHeight: "0.1" }} key={`lnk-${idx}-name1`} href={o.href1} target={o.target1 ?? "_blank"} >
                  ㅤ{o.name1.substring(1)}ㅤ
            </Link>
            </Tooltip>

            <Divider sx={{ fontSize: "8.5pt", marginTop: "8px", marginBottom: "1px",height:"1px", backgroundColor:"#ccc" }}> ㅤㅤㅤㅤ</Divider></>) : (
                       <>
                          {renderPre(o.pre1, o.href1, o.title1, o.target1)}
                          {o.name1 && (
                             <Tooltip title={o.title1 ?? o.href1} arrow>
                                <Link sx={blink} href={o.href1} target={o.target1 ?? "_blank"} >
                                   {o.name1}
                                </Link>
                             </Tooltip>
                          )}
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
         {dto.showas === "table" ? renderTable() : itHas(dto, "links") && dto.links.map((o, idx) => (showRows(o, idx)))}
   </>
   )
}