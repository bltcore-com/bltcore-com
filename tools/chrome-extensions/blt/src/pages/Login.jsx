import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

import GitHubIcon from "@mui/icons-material/GitHub"
import GoogleIcon from "@mui/icons-material/Google"
import { CssBaseline } from "@mui/material"
import { ThemeProvider } from '@mui/material/styles'

export default function Login({theme }) {
   const paperStyle = { padding: 10, height: 340, width: 380, margin: "14px auto" }
   const avatarStyle = {height: 24, width: 24, margin: "10px" }
   const btnstyle = { margin: '8px 0' }
   return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
      <Grid>
         <Paper elevation={10} style={paperStyle}>
               <Grid sx={{ marginTop: "1px" }} align='center'>
                  <h4 style={{marginTop: 6,marginBottom:"18px"}}>Sign in with</h4>
                  <Grid container justifyContent="center" alignItems="center" sx={{marginBottom:2}}>
                  <Button varient="outlined" sx={{textTransform:"none",height:"34px",border:"1px solid black"}}>
                     <Avatar style={avatarStyle}><GitHubIcon /></Avatar>Github
                     </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     <Button varient="outlined" sx={{textTransform:"none",height: "34px", border: "1px solid black" }}>
                        <Avatar style={avatarStyle}><GoogleIcon /></Avatar>Google
                     </Button>
                  </Grid>
               <hr/>
               <h4 style={{ marginTop: 20, marginBottom: "12px" }}>Or Sign In</h4>
            </Grid>
            <TextField sx={{marginBottom:"6px;"}} label='Username' placeholder='Enter username' variant="outlined" size="small" fullWidth required />
               <TextField label='Password' placeholder='Enter password' type='password' variant="outlined" size="small" fullWidth required />
               <Grid container justifyContent="center" alignItems="center">
            <FormControlLabel
               control={
                  <Checkbox
                     name="checkedB"
                     color="primary"
                  />
               }
               label="Remember me"
            />
               <Typography >
                     <Link href="#" sx={{ fontSize: "12px", marginLeft: "3px", textShadow: "none" }}>
                     forgot password ?
                  </Link>
               </Typography>
         </Grid>

            <Button type='submit' color='primary' variant="contained" style={btnstyle} size="small" fullWidth>Sign in</Button>
            <Typography sx={{fontSize:14}}> Do you have an account ?&nbsp;
                  <Link href="#" sx={{ fontSize: "12px", marginLeft: "12px", textShadow: "none" }}>
                  sign up
               </Link>
            </Typography>
         </Paper>
      </Grid>
      </ThemeProvider>
   )
}

