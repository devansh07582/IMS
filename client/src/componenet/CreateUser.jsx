import { Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function CreateUser() {
    return (
        <div>

            <Card sx={{ minWidth: 500, m: 4, width: "40%", marginLeft: "30%", height: "30%", marginTop: "10%" }}>

                <Box componenet="span"
                    m={1}
                    display="flex"
                    justifyContent="center"
                    pr={1}
                    pt={1}>

                        <Typography variant='h1'> Create User </Typography>




                </Box>



            </Card>


        </div>
    )
}

export default CreateUser
