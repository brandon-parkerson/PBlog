import { useState } from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Button from '@mui/material/Button';

import TextField from "@mui/material/TextField";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function LoginForm() {
  return (
    <div className="log-in-form">
      
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        type="email"
        required
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type="password"
        required
      />
      <Button variant="contained" className="log-in-btn">Log In</Button>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  console.log("app reloaded");

  return (
    <div className="log-in-page">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline></CssBaseline>

        <h1 className="title">Welcome to PBlog!</h1>
        <LoginForm />
        <Button variant="text">Register</Button>
      </ThemeProvider>
    </div>
  );
}

export default App;
