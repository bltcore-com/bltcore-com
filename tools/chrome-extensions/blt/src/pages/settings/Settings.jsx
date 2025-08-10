import PropTypes from "prop-types"
import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Box } from "@mui/material"
import { SettingsHeader, SettingsFooter } from "./SettingsSubcomponents"
import { GeneralTab } from "./GeneralTab"
import { LinksTab } from "./LinksTab"
import axios from "axios"


/**
 * The `Settings` component is responsible for rendering the settings page of the application.
 * It allows the user to update various settings, such as their social media URLs and dark mode preferences.
 * The component uses the `themeProps` object to access the current theme settings, including the dark mode state and a function to toggle it.
 * The component also provides functionality to reset the settings to their default values and to navigate back to the home page.
 */
export default function Settings({ themeProps }) {
   const { name, ls, darkMode } = themeProps
   const lcolor = darkMode ? "rgb(76,249,77)" : "#1b2051"


   const { gh, li, tw, ig, fb, ic, gl, ib, ca, go, ba, sm, ai, qo } = ls.header
   const [githubUrl, setGithubUrl] = useState(gh ?? "")
   const [linkedinUrl, setLinkedinUrl] = useState(li ?? "")
   const [twitterUrl, setTwitterUrl] = useState(tw ?? "")
   const [instaUrl, setInstaUrl] = useState(ig ?? "")
   const [facebookUrl, setFacebookUrl] = useState(fb ?? "")
   const [icloudUrl, setIcloudUrl] = useState(ic ?? "")
   const [googleDriveUrl, setGoogleDriveUrl] = useState(gl ?? "")
   const [inboxUrl, setInboxUrl] = useState(ib ?? "")
   const [calendarUrl, setCalendarUrl] = useState(ca ?? "")
   const [travelUrl, setTravelUrl] = useState(go ?? "")
   const [bankUrl, setBankUrl] = useState(ba ?? "")
   const [brokerUrl, setBrokerUrl] = useState(sm ?? "")
   const [chataiUrl, setChataiUrl] = useState(ai ?? "")
   const [motdUrl, setMotdUrl] = useState(qo ?? "")


   // Add state for active tab


   useEffect(() => {
      setGithubUrl(gh)
      setLinkedinUrl(li)
      setTwitterUrl(tw)
      setInstaUrl(ig)
      setFacebookUrl(fb)
      setIcloudUrl(ic)
      setGoogleDriveUrl(gl)
      setBankUrl(ba)
      setInboxUrl(ib)
      setCalendarUrl(ca)
      setTravelUrl(go)
      setBankUrl(ba)
      setBrokerUrl(sm)
      setChataiUrl(ai)
      setMotdUrl(qo)
   }, [gh, li, tw, ig, fb, ic, gl, ib, ca, go, ba, sm, ai, qo])

   const pagelink = "/settings"
   const navigate = useNavigate()
   const location = useLocation()
   const handleNav = () => {
      navigate(location.pathname === pagelink ? "/" : pagelink)
   }
   const handleCancel = () => {
      handleNav()
   }
   /**
    * Handles resetting the application state by removing the stored data from localStorage and reloading the page.
    * This function is called when the user wants to reset their settings or preferences.
    */
   const handleReset = () => {
      localStorage.removeItem(name)
      // eslint-disable-next-line no-undef
      if (typeof chrome !== "undefined" && chrome.runtime) {
         // eslint-disable-next-line no-undef
         chrome.runtime.reload()
      } else {
         window.location.reload()
      }
   }

   const handleUpdate = async () => {

      const quotes = async () => {
         try {
            const response = await axios.get(ls.header.qo + '/quotes?topic='+ls.td)
            ls.quotes = response.data
         } catch (error) {
            console.error('Error fetching quotes:', error)
            delete ls.quotes
         }
      }

      if(ls.ts) await quotes()
      else delete ls.quotes

      ls.header.gh = githubUrl
      ls.header.li = linkedinUrl
      ls.header.tw = twitterUrl
      ls.header.ig = instaUrl
      ls.header.fb = facebookUrl
      ls.header.ic = icloudUrl
      ls.header.gl = googleDriveUrl
      ls.header.ib = inboxUrl
      ls.header.ca = calendarUrl
      ls.header.go = travelUrl
      ls.header.ba = bankUrl
      ls.header.sm = brokerUrl
      ls.header.ai = chataiUrl
      ls.header.qo = motdUrl
      localStorage.setItem(name, JSON.stringify(ls))
      handleNav()
   }


   const [tabSet, setTabSet] = useState(0)
   const handleChange = (event, newValue) => {
      setTabSet(newValue)
   }

   const toolProps = {
      githubUrl: githubUrl,
      setGithubUrl:setGithubUrl,
      linkedinUrl:linkedinUrl,
      setLinkedinUrl: setLinkedinUrl,
      twitterUrl: twitterUrl ,
      setTwitterUrl: setTwitterUrl ,
      instaUrl: instaUrl ,
      setInstaUrl: setInstaUrl ,
      facebookUrl: facebookUrl ,
      setFacebookUrl:setFacebookUrl,
      icloudUrl: icloudUrl,
      setIcloudUrl: setIcloudUrl,
      inboxUrl: inboxUrl,
      setInboxUrl: setInboxUrl,
      calendarUrl: calendarUrl,
      setCalendarUrl: setCalendarUrl,
      travelUrl: travelUrl,
      setTravelUrl: setTravelUrl,
      brokerUrl: brokerUrl,
      setBrokerUrl: setBrokerUrl,
      chataiUrl:chataiUrl,
      setChataiUrl: setChataiUrl,
      motdUrl:motdUrl,
      setMotdUrl:setMotdUrl
   }

   return (
      <Box sx={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif", margin: "12px 0px 0px 2px" }}>
         <SettingsHeader tabSet={tabSet} handleTabChange={handleChange} lcolor={lcolor} />
         <GeneralTab lcolor={lcolor} themeProps={themeProps} />
         {/*
         {
            tabSet === 0 && ( <GeneralTab lcolor={lcolor} themeProps={themeProps} /> )
         }
         {
            tabSet === 1 && ( <LinksTab lcolor={lcolor} handleUpdate={handleUpdate} toolProps={toolProps} />  )
         }
          */}
         <SettingsFooter lcolor={lcolor} handleCancel={handleCancel} handleUpdate={handleUpdate} handleReset={handleReset} />
      </Box>
   )
}

Settings.propTypes = {
   themeProps: PropTypes.shape({
      name: PropTypes.string.isRequired,
      ls: PropTypes.object.isRequired,
      darkMode: PropTypes.bool.isRequired,
      setDarkMode: PropTypes.func.isRequired,
      gridSet: PropTypes.bool.isRequired,
      setGridSet: PropTypes.func.isRequired,
      grid: PropTypes.string,
      setGrid: PropTypes.func,
      gridData: PropTypes.string,
      setGridData: PropTypes.func,
      topicsSet: PropTypes.bool.isRequired,
      setTopics: PropTypes.func.isRequired,
      topicData: PropTypes.string,
      setTopicData: PropTypes.func,

   }).isRequired,
}
