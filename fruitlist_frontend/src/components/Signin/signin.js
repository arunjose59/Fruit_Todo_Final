import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./signin.css";
import { useState } from "react";
function Signin(props) {
  const [username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  let { setAuth } = props;
  const navigate = useNavigate();
  function submit() {
    if (username && Password) {
      localStorage.setItem("auth", true);

      navigate("/list");
    } else {
      alert("Invalid Username or Password");
    }
  }
  return (
    <>
      <div className="signin">
        <h1>SIGN IN</h1>
        <div className="name">
          <TextField
            onChange={(e) => setUsername(e.target.value)}
            label="Enter name"
            variant="outlined"
          />
        </div>
        <div className="pwd">
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            label="Password"
            variant="outlined"
          />
        </div>
        <Button onClick={submit} variant="contained">
          Submit
        </Button>
      </div>
    </>
  );
}
export default Signin;
