import PropTypes from "prop-types"
import { Table, Tr, Td } from "./StyledComponents"
import { Box, TextField } from "@mui/material"

const line = { margin: "2px 0 2.9em 6px", width: "240px",
   height: "0.5em", // Adjust the height as needed
}

const tabFrame = {
   marginLeft: "0px",
   height: "224px",
   fontSize: "10pt",
   padding: "0x",
   // border: "1px solid #ccc",
}

export function LinksTab({ lcolor, handleUpdate, toolProps}) {
const { githubUrl, setGithubUrl, linkedinUrl, setLinkedinUrl,
   twitterUrl, setTwitterUrl, instaUrl, setInstaUrl, facebookUrl, setFacebookUrl,
   icloudUrl, setIcloudUrl, inboxUrl,setInboxUrl,calendarUrl,setCalendarUrl,
   travelUrl,setTravelUrl, brokerUrl,setBrokerUrl, chataiUrl,setChataiUrl,motdUrl, setMotdUrl
} = toolProps

   return (
      <Box sx={tabFrame}>
         <form onSubmit={handleUpdate}>
            <Table lcolor={lcolor} sx={{ width: "100%" }} >
               <tbody>
                  <Tr>
                     <Td>
                        <TextField name="github"  key="githubUrl" label="GitHub URL" sx={line} variant="standard"
                           onChange={(event) => setGithubUrl(event.target.value)} value={githubUrl} />
                     </Td>
                     <Td>
                        <TextField name="linkedin" key="linkedinUrl" label="LinkedIn URL" sx={line} variant="standard"
                           onChange={(event) => setLinkedinUrl(event.target.value)} value={linkedinUrl} />
                     </Td>
                     <Td>
                        <TextField name="x.com" key="twitterUrl" label="X.com URL" sx={line} variant="standard"
                           onChange={(event) => setTwitterUrl(event.target.value)} value={twitterUrl}/>
                     </Td>
                  </Tr>
                  <Tr>
                     <Td>
                        <TextField name="instagram" key="instaUrl" label="Instagram URL" sx={line} variant="standard"

                           onChange={(event) => setInstaUrl(event.target.value)} value={instaUrl}/>
                     </Td>
                     <Td>
                        <TextField name="facebook" key="facebookUrl" label="Facebook URL" sx={line} variant="standard"
                           onChange={(event) => setFacebookUrl(event.target.value)} value={facebookUrl}/>
                     </Td>
                     <Td>
                        <TextField name="icloud" key="icloudUrl" label="iCloud URL" sx={line} variant="standard"
                           onChange={(event) => setIcloudUrl(event.target.value)} value={icloudUrl}/>
                     </Td>
                  </Tr>
                  <Tr>
                     <Td>
                        <TextField name="inbox" key="inboxUrl" label="Inbox URL" variant="standard"
                           sx={line} onChange={(event) => setInboxUrl(event.target.value)} value={inboxUrl}/>
                     </Td>
                     <Td>
                        <TextField name="calendar" key="calendarUrl" label="Calendar URL" sx={line} variant="standard"
                           onChange={(event) => setCalendarUrl(event.target.value)} value={calendarUrl} />
                     </Td>
                     <Td>
                        <TextField name="travel" key="travelUrl" label="Travel URL" sx={line} variant="standard"
                           onChange={(event) => setTravelUrl(event.target.value)} value={travelUrl} />
                     </Td>
                 </Tr>
                  <Tr>
                     <Td>
                        <TextField name="brokerage" key="brokerUrl" label="Broker URL" sx={line} variant="standard"
                           onChange={(event) => setBrokerUrl(event.target.value)} value={brokerUrl} />
                     </Td>
                     <Td>
                        <TextField name="genai" key="chataiUrl" label="AI URL" sx={line} variant="standard"
                           onChange={(event) => setChataiUrl(event.target.value)} value={chataiUrl} />
                     </Td>
                     <Td>
                        <TextField name="motd" key="motdUrl" label="Message of the Day URL" sx={line} variant="standard"
                           onChange={(event) => setMotdUrl(event.target.value)}   value={motdUrl} />
                     </Td>
                  </Tr>
               </tbody>
            </Table>
         </form>
      </Box>
   )
}

LinksTab.propTypes = {
   lcolor: PropTypes.string,
   handleUpdate: PropTypes.func,
   toolProps: PropTypes.object,
}