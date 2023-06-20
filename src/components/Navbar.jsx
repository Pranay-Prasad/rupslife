import  React,{useState} from 'react';
import { Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  useTheme,
  Button,
  useMediaQuery

 } from '@mui/material';
import { useScreenResolution } from '../hooks/ResponsiveHooks';
import '../css/Navbar.css'
import logo from '../assets/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});
const Navbar = () => {
  const {isMobile,isTabletOrMobile} = useScreenResolution();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box className="Navbar" sx={{ flexGrow: 1}}>
      <Box sx={{
        display:"flex",
        justifyContent:"space-between",
        padding:isMobile?"0 1rem":"0 2rem",
        }}>
        <Box color={"black"} >
            <img src={logo} alt="" width={"100px"} />
        </Box>
        <Box display={isMobile?"none":""} >
            <ul className='NavbarList'>
                <li><a href='/' >Home</a></li>
                <li><a href='#' >Product</a></li>
                <li><a href='#' >Service</a></li>
                <li><a href='/contact' >Contact</a></li>
                <li><a href='#' >News</a></li>
            </ul>
        </Box>
        <Box sx={{display:isMobile?"flex":"none", alignItems:"center"}}>
          <MenuIcon sx={{width:"80px",fontSize:"2rem",color:"#3F48C9"}} onClick={()=>setOpen(true)}/>
        </Box>
        <Dialog
          fullScreen
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          sx={{
            // marginLeft:"30%",
            background:"white"
          }}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <Box>
            <img src={logo} alt="" width={"100px"} />
            </Box>
            <Box>
              <CloseIcon sx={{fontSize:"2rem"}} onClick={()=>setOpen(false)} />
            </Box>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <Box>
              <ul className='NavbarListMob'>
                  <li><a href='/' >Home</a></li>
                  <li><a href='#' >Product</a></li>
                  <li><a href='#' >Service</a></li>
                  <li><a href='/contact' >Contact</a></li>
                  <li><a href='#' >News</a></li>
              </ul>
              </Box>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  )
}
export default Navbar