import React, { useState } from "react";

import {TextField,Button,Stack,Paper} from "@mui/material";

const LoginForm = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your login logic here
  };

  return (
        <Paper sx={{ padding: "100px" }} elevation={2}>
          <form  onSubmit={handleSubmit}>
            <Stack dirction = "column" spacing={3}>
              <TextField
                id="username"
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </Stack>
          </form>
    </Paper>

    
  );
};

export default LoginForm;