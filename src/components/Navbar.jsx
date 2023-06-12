import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import '../css/Navbar.css'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <Box className="Navbar" sx={{ flexGrow: 1}}>
      <Box sx={{
        display:"flex",
        justifyContent:"space-between",
        padding:"0 3rem"
        }}>
        <Box color={"black"} >
            <img src={logo} alt="" width={"100px"} />
        </Box>
        <Box >
            <ul className='NavbarList'>
                <li><a href='#' >Home</a></li>
                <li><a href='#' >Product</a></li>
                <li><a href='#' >Service</a></li>
                <li><a href='#' >Contact</a></li>
                <li><a href='#' >News</a></li>
            </ul>
        </Box>
      </Box>
    </Box>
  )
}
export default Navbar