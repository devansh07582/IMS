import React, { useState, useEffect } from 'react';

import {
  Box,
  Button,
  Stack,
  Paper,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  MenuItem,
} from "@mui/material";


import { Link } from 'react-router-dom';
import "../App.css";



function EnquiryForm() {



  const [name, setName] = useState("");
  const [phonenumber, setphone] = useState(0);
  const [emailaddress, setemail] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [pincode, setpin] = useState("");
  const [highest, setQualification] = useState("");
  const [interest, setInterest] = useState("");
  const [priorcomputerknowledge, setPriorComputerKnowledge] = useState("");
  const [field, setfield] = useState("");
  const [otherSkill, setOtherSkill] = useState("");

  // const [department, setdepartment] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name,
      phonenumber,
      emailaddress,
      address: { city, state, pincode },
      qualification: { highest, interest, priorcomputerknowledge },
    };
    fetch("http://localhost:8080/api/v1/enquires", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((res) => console.log(res))
      .catch((error) => console.error(error));

    console.log(JSON.stringify(data));
  };

  function handlePinChange(e) {
    const newPincode = e.target.value;

    if (newPincode > 100000) {
      fetch(`https://api.postalpincode.in/pincode/${newPincode}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Data", data);
          setpin(newPincode);
          setcity(data[0].PostOffice[0].District);
          setstate(data[0].PostOffice[0].State);
        })
        .catch((error) => {
          console.log("Error fetching pincode data", error);
          setcity("");
          setstate("");
        });
    }
  }

  const [emailError, settext] = useState("");
  const emailInfo = (e) => {
    const check = e.target.value;
    if (check.includes("@") === false) {
      settext("Invalid Email");
    } else {
      setemail(check);
      settext("");
    }
  };





  const [phoneError, setphoneError] = useState("");
  const handlePhone = (e) => {

    let a = 0;

    const num = e.target.value;

    for (let i = 0; i < num.length; i++) {
      if (num[i] >= 0 && num[i] <= 10) {

        continue
      }

      else {
        a = 1;
      }
    }

    if (a == 0) {
      if (num.length < 10) {


        setphoneError("Number is not in valid format");
      } else {
        setphoneError("")
        setphone(num);
      }
    } else {
      setphoneError("enter only number")
      setphone(0)
    }

  };

  const [submitallow, setSubmitallow] = useState(true)


  useEffect(() => {

    if ((phonenumber > 1000000000) && (emailaddress !== "") && (name !== "") && (pincode !== "") && (city !== "") && (state !== "") && (highest !== "") && (interest !== "") && (priorcomputerknowledge !== "")) {
      setSubmitallow(false);
    } else {
      setSubmitallow(true);
    }

  }, [phonenumber, name, emailaddress, city, state, pincode, highest, interest, priorcomputerknowledge, field])




  return (
    <div className="form">
      <Paper sx={{ padding: "32px" }} elevation={2}>
        <Stack spacing={3} direction="column">
          <h3>Personal information</h3>
          <Stack spacing={2} direction="row">
            <TextField
              onChange={(e) => {
                setName(e.target.value);
              }}
              label="Name"
              variant="outlined"
            />
            <TextField
              onBlur={handlePhone}
              helperText={phoneError}
              label="Phone"
              variant="outlined"
            />
            <TextField
              onBlur={emailInfo}
              helperText={emailError}
              label="email"
              variant="outlined"
            />
          </Stack>

          <h3>Address</h3>

          <Stack spacing={2} direction="row">
            <TextField
              onChange={handlePinChange}
              label="Pincode"
              variant="outlined"
            />
            <TextField
              value={city}
              onChange={(e) => {
                setcity(e.target.value);
              }}
              InputProps={{
                readOnly: true,
              }}
              label="city"
              variant="outlined"
            />
            <TextField
              value={state}
              onChange={(e) => {
                setstate(e.target.value);
              }}
              InputProps={{
                readOnly: true,
              }}
              label="state"
              variant="outlined"
            />
          </Stack>

          <h3>Qualification</h3>

          <Stack spacing={2} direction="column">
            <Stack spacing={2} direction="row">
              <TextField
                onChange={(e) => {
                  setQualification(e.target.value);
                }}
                label="Highest qualification"
                variant="outlined"
              />
              <TextField
                onChange={(e) => {
                  setInterest(e.target.value);
                }}
                label="Interest"
                variant="outlined"
              />
            </Stack>

            <Stack spacing={2} direction="row">
              <FormControl>
                <FormLabel
                  style={{ color: "blue" }}
                  id="Do you have prior computer knowledge"
                >
                  Do you have prior computer knowledge
                </FormLabel>

                <RadioGroup
                  row
                  aria-labelledby="job-experience-group-label"
                  name="job-experience-group"
                  // value={value}
                  onChange={(e) => {
                    setPriorComputerKnowledge(e.target.value);
                  }}
                >
                  <FormControlLabel
                    labelPlacement="start"
                    value="yes"
                    control={<Radio size="small" color="secondary" />}
                    label="Yes"
                  />
                  <FormControlLabel
                    labelPlacement="start"
                    value="no"
                    control={<Radio size="small" color="secondary" />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
            </Stack>
          </Stack>

          <h3>Subject of Enquery</h3>

          <Box width="500px">
            <TextField
              label="select field"
              select
              fullWidth
              value={field}
              onChange={(e) => {
                setfield(e.target.value);
              }}
            >
              <MenuItem value="Cyber security">Cyber Security</MenuItem>
              <MenuItem value="Development">Development</MenuItem>
              <MenuItem value="Networking">Networking</MenuItem>
              <MenuItem value="cloud">cloud</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>

            {field === "Other" && (
              <TextField
                label="Other"
                id="margin-normal"
                margin="normal"
                onChange={(e) => {
                  setOtherSkill(e.target.value);
                }}
              />
            )}
          </Box>


          <Button disabled={submitallow} className="btn" variant="contained" type="submit" onClick={handleSubmit} > submit    </Button>


        </Stack>
      </Paper>


    </div>
  );
}
export default EnquiryForm;
