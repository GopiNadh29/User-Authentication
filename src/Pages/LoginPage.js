import React from "react";
import Img from "../Img.png"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FilledInput from '@mui/material/FilledInput';
import "../Styles/LoginPage.scss"
import "../index.css"

function Click() {
  alert("Login Success");
}

export default function LoginPage(){
  const [value, setValue] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {event.preventDefault();
    // const preventDefault = (event) => event.preventDefault();
    
  };
  
    return(<>
    <div className="LoginPage">
    <div className="LoginContainer">
    <div className="Imag" ><img src={Img} alt="Img"></img></div>
    <div className="LoginContent">
        <div> <h1>Sign In</h1> </div>
        <div>
        <Box
       component="form"
       sx={{
        '& > :not(style)': { m: 1, width: '25ch'},
       }}
       Validate
       autoComplete="off"
      >
       <TextField  id="filled-basic" label="UserName" variant="filled" />
       </Box>
        </div>
    
        <Box 
    sx={{
        display: "flex",
        flexWrap: "wrap",
        "--hue": Math.min(value.length * 10, 120)
      }}
      >
<FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
  <InputLabel htmlFor="filled-adornment-password">
    Password
  </InputLabel>
  <FilledInput
    value={value}
    onChange={(event) => setValue(event.target.value)}
    id="outlined-adornment-password"
    type={showPassword ? "text" : "password"}
    endAdornment={
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    }
    label="Password"
  />

</FormControl> 
</Box>
        <div>
        <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Password" />
    </FormGroup>
        </div>
        <div> <Link href="#">Remember the Password?</Link></div>

        <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={Click} >Sign In</Button> 
      </Stack>
    </div> 
    </div>
    </div>
    </>)}

