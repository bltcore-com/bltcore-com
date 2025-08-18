/**
 * Imports the `PropTypes` module from the 'prop-types' package.
 * `PropTypes` provides a way to validate the props passed to a React component.
 * This import is likely used to define the expected prop types for the component
 * in which this code is used.
 */
import PropTypes from "prop-types"

/**
 * Imports the `Link` component from the 'react-router-dom' package.
 * The `Link` component is used to create links between different routes in a React Router-based application.
 * This import is likely used to provide a way to navigate to different pages or sections of the application.
 */
import { Link } from "react-router-dom"

/**
 * Imports the `AppBar`, `Toolbar`, `Box`, and `Button` components from the `@mui/material` package.
 * These components are likely used to create the header or navigation bar of the application.
 * The `AppBar` component provides a material-design app bar, the `Toolbar` component is used to
 * define the content and layout of the app bar, the `Box` component is a flexible layout
 * container, and the `Button` component is used to create clickable buttons.
 */
import { AppBar, Toolbar, Box, Button } from "@mui/material"

/**
 * Imports the `IconBar` component from the same directory.
 * The `IconBar` component is used to render a bar of icons
 * in the header.
 */
import IconBar from "./IconBar";


/**
 * Renders the header component for the application.
 * The header includes a logo, the application name, a link to the website, and version information.
 * It also includes an `IconBar` component that renders a bar of icons.
 * The header's appearance is controlled by the `themeProps` object, which includes properties
 * for the application name, localStorage object, dark mode state, and a function to set the dark mode state.
 *
 * @param {Object} themeProps - An object containing properties related to the application's theme.
 * @param {string} themeProps.name - The name of the application.
 * @param {Object} themeProps.ls - An object containing localStorage data.
 * @param {boolean} themeProps.darkMode - A flag indicating whether dark mode is enabled.
 * @param {function} themeProps.setDarkMode - A function to set the dark mode state.
 */
export default function Header({ themeProps }) {
   // const { name, ls, darkMode, setDarkMode } = themeProps
   const { name, ls, darkMode, setDarkMode } = themeProps;
   const versionText = `v${ls.version}`;

   // const toggleDarkMode = () => {
   //    ls.dm = !darkMode
   //    setDarkMode(ls.dm)
   //    localStorage.setItem(name,JSON.stringify(ls))
   // }

   return (
      <>
         <Box sx={{ flexGrow: 1 }}>
            <AppBar
               position="static"
               sx={{
                  backgroundColor: "#edf0f6",
                  borderBottom: "1px solid",
                  borderColor: darkMode ? "hsl(217.2 32.6% 17.5%)" : "hsl(220 13% 91%)",
                  boxShadow: "none",
                  color: "hsl(221 83% 13%)",
                  "& .imglogo": { width: "42px", height: "42px" },
               }}
            >
               <Toolbar sx={{ padding: "1rem 1.5rem" }}>
                  <Box sx={{ flexGrow: 1 }}>
                     <Button
                        color="inherit"
                        href="/index.html"
                        target="_blank"
                        onClick={() => {
                           // ls.dm = !darkMode
                           // setDarkMode(ls.dm)
                           // localStorage.setItem(name, JSON.stringify(ls))
                        }}
                        title="Toggle Dark Mode"
                        sx={{
                           "&:focus": { outline: "none" },
                           textTransform: "none",
                           padding: "0.5rem",
                           minWidth: "auto"
                        }}
                     >
                        <img
                           src="/logo.png"
                           className="imglogo"
                           alt="BLT Logo"
                           style={{
                              filter: "none"
                           }}
                        />
                     </Button>
                     <Link to="https://bltcore.com/">
                        <Button
                           color="inherit"
                           className="nav-link"
                           href="https://bltcore.com"
                           target="_new"
                           sx={{
                              textTransform: "none",
                              textShadow: "none",
                              color: "hsl(221 83% 13%)",
                              fontWeight: 400,
                              "&:hover": {
                                 color: darkMode ? "hsl(24 95% 53%)" : "hsl(24 95% 53%)"
                              }
                           }}
                        >
                           Beyond Limited Thinking
                        </Button>
                     </Link>
                  </Box>
                  <Box sx={{ flexGrow: 7 }} />
                  <Box sx={{ flexGrow: 1 }} />
                  <Box>
                     <Button
                        color="inherit"
                        href="https://chromewebstore.google.com/detail/bltcore/eklchbpcdgjhlknmnkdjogefejfaoakn"
                        target="_new"
                        sx={{
                           textTransform: "none",
                           textShadow: "none",
                           color: "hsl(221 83% 13%)",
                           fontWeight: 400,
                           "&:hover": {
                              color: darkMode ? "hsl(24 95% 53%)" : "hsl(24 95% 53%)"
                           }
                        }}
                     >
                        {versionText}
                     </Button>
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                     <IconBar themeProps={themeProps} />
                  </Box>
               </Toolbar>
            </AppBar>
         </Box>
      </>
   );
}

Header.propTypes = {
   themeProps: PropTypes.shape({
      name: PropTypes.string.isRequired,
      ls: PropTypes.object.isRequired,
      darkMode: PropTypes.bool.isRequired,
      setDarkMode: PropTypes.func.isRequired,
   }).isRequired,
}
