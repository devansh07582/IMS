import { Button, Card, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React ,{useState}from 'react'
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import "../App.css"
import { Link } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



function LoginPage() {

    const [PasswordIcons,SetPasswordIcons] = useState("password")

    function MakeVisible(){
SetPasswordIcons("text")
    }
    function MakeInVisible(){
        SetPasswordIcons("password")
            }



    return (
        <div>
            <Card sx={{ minWidth: 500, m: 4 ,width : "40%" ,marginLeft:"30%" ,height : "30%" ,marginTop:"10%"}} >

                <Box componenet="span"
                    m={1}
                    display="flex"
                    justifyContent="center"
                    pr={1}
                    pt={1}>

                    <Typography fontFamily= 'Roboto' fontWeight={400} variant='h3'sx = {{marginLeft:"30%"}}>Login </Typography>
                    <CardContent>


                <Paper sx={{width: "100" ,marginTop : "30%" ,marginLeft:"-100%"}}>
                            <TextField sx ={{width : "100%"}}placeholder='enter username ' ></TextField><br />
                            <br />
                            
                            <TextField componenet = "span" type = {PasswordIcons} sx ={{width : "100%"}}placeholder='enter password' > </TextField><br/>
                            <br/>

                          { PasswordIcons==="text"? <Visibility onClick={MakeInVisible} ></Visibility> : <VisibilityOff onClick={MakeVisible}></VisibilityOff> }

                            <Button sx ={{width : "100%"}}  variant='contained'> LOGIN </Button><br/>
                            <br/> 
                            <span style = {{color : "blue" ,display : "flex" ,justifyContent:"center"}}>
                                or
                            </span><br/>
                       
                            <i style = {{display : "flex" ,justifyContent:"center"}}>
                                Forgotten your password?
                            </i><br/>

                            </Paper>

                <Paper sx={{width: "100" ,marginTop : "10%" ,marginLeft:"-100%"
            ,padding:"10%"}}>
                        Don't have Registered yet ?



          <Link to ="/" style={{textDecoration : "none"}}> Register Here</Link>

                    </Paper>

                            


                            

                    </CardContent>



                </Box>

            </Card>
        </div>
    )
}

export default LoginPage
