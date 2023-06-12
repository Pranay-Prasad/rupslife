import React from 'react'
import { Box,Typography } from '@mui/material'
import objectiveimg from '../assets/objective.svg'
const Objectives = () => {
  return (
    <div>
      <Box margin={"2rem 0"}>
        <Typography align='center' variant='h3'>Objective</Typography>
        <Box sx={{
          display:"flex",
          alignItems:"center",
          justifyContent:"space-around",
          gap:"2rem"
        }}
         >
          <Box sx={{
            width:"50%"
          }}>
            <Typography sx={{fontSize:"20px"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus amet pariatur tempore molestiae ex quidem magni ad sapiente dolorem exercitationem?
            </Typography>
          </Box>
            <Box>
              <img src={objectiveimg} width={"450px"} />
            </Box>
        </Box>
      </Box>
    </div>
    
  )
}

export default Objectives