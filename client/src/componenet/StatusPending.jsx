
import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";


function StatusPending() {
  const [rows, setRows] = useState([]);
  const [rowdata, setRowdata] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/enquires").then((response) => {
      setRows(response.data.enquiry);
    });
  }, []);

const history = useNavigate();




  return (


    <>
      {rows ? (
        <Card sx={{ minWidth: 900, m: 4 }}>
          <Button  className= "btn1" variant="contained"  onClick={()=>history(-1)} > Back </Button>

          <Box
            componenet="span"
            m={1}
            display="flex"
            justifyContent="end"
            pr={1}
            pt={1}
          >
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={rows}
              onChange={(e, v) => setRowdata(v)}
              getOptionLabel={(rows) => rows.title || ""}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Student Name" />}
            />
          </Box><CardContent>
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              <TableContainer sx={{ maxHeight: 700 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Name</TableCell>
                      <TableCell align="left">phonenumber</TableCell>
                      <TableCell align="left">emailaddress</TableCell>
                      <TableCell align="left">address</TableCell>
                      <TableCell align="left"> qualification</TableCell>
                      <TableCell align="left"> Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {

                      rows.map((value, index) => {
                        if(value.status === "pending"){


                        return (
                          

                          <TableRow

                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={index}
                            // onMouseOverCapture={() => { handleClickOnRow(value._id) }}

                          >
                            <TableCell align="left">{value.name}</TableCell>
                            <TableCell align="left">{value.phonenumber}</TableCell>
                            <TableCell align="left">{value.emailaddress}</TableCell>
                            <TableCell align="left">{value.address.city}</TableCell>
                            <TableCell align="left">{value.qualification.highest + " " + value.qualification.interest}</TableCell>
                            <TableCell align="left">{value.status} 
                        
                          </TableCell>

                          </TableRow>
                        )}
                      })
                    }
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </CardContent>
        </Card>
      ) : (
        <h2>Loading...</h2>
      )}

    </>
  );
}


export default StatusPending
