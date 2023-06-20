import React from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import contactImg from '../assets/contact.svg'
import '../css/ContactForm.css'
import {useScreenResolution} from '../hooks/ResponsiveHooks'
import { Height } from '@mui/icons-material';
const ContactForm = () => {
    const {isMobile} = useScreenResolution();
    return (
        <div>
            <Box sx={{
                margin:"5rem 0"
            }}>
                <Box sx={{
                    width: "90%",
                    margin: "2rem auto",
                    borderRadius: "10px",
                    boxShadow:"1px 1px 20px 1px #afafaf;",
                    padding: "1rem",
                    display: "flex",
                    flexDirection:isMobile?"column":"row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1.2rem"
                }}>
                    <Box sx={{
                        width: isMobile?"90%":"50%",
                        padding: "1rem"
                    }}>
                        <Box sx={{
                            margin: "1rem"
                        }}>
                            <Typography variant='h4' align='center' sx={{ fontFamily: "sans-serif" }}> Send Query</Typography>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem"
                        }}>
                            <TextField variant='outlined' label="Company Name" />
                            <TextField variant='outlined' label="Contact Person" />
                            <TextField variant='outlined' label="Email" />
                            <TextField variant='outlined' label="Mobile" />
                            <TextField multiline label="Query" rows={4} defaultValue="Default Value" />
                            <Button variant='contained' >Submit</Button>
                        </Box>
                    </Box>
                    <Box sx={{
                        width: isMobile?"90%":"50%",
                        // border: "1px solid red",
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"space-between",
                        gap:"3rem"
                    }}>
                        <Box>
                            <img src={contactImg} alt="" width={isMobile?"90%":"430px"} />
                        </Box>
                        <Box sx={{
                            display:"flex",
                            flexDirection:"column",
                            gap:"0.2rem"
                        }}>
                            <Box className="contact_box" >
                                <EmailIcon sx={{fontSize:"1.2rem", borderRadius:"50%", background:"#3f48c9", padding:"0.5rem",color:"white", margin:"5px"}} />
                                <Box>
                                    <Typography>mukeshkumar@rupslifesciences.in</Typography>
                                    <Typography>rupslifesciences@gmail.com</Typography>
                                </Box>
                            </Box>
                            <Box className="contact_box" >
                                <CallIcon sx={{fontSize:"1.2rem", borderRadius:"50%", background:"#3f48c9", padding:"0.5rem",color:"white", margin:"5px"}} />
                                <Typography>+91-98724-01912</Typography>
                            </Box>
                            <Box className="contact_box" >
                                <LocationOnIcon sx={{fontSize:"1.2rem", borderRadius:"50%", background:"#3f48c9", padding:"0.5rem",color:"white", margin:"5px"}} />
                                <Box>
                                    <Typography><span style={{fontWeight:"bold"}} >Rups Lifesciences Pvt. Ltd.</span>A-196, Sector 83, Phase II, Noida-201305 (UP)-INDIA</Typography>
                                </Box>
                            </Box>
                            <Box className="contact_box" >
                                <LocationOnIcon sx={{fontSize:"1.2rem", borderRadius:"50%", background:"#3f48c9", padding:"0.5rem",color:"white", margin:"5px"}} />
                                <Box>
                                    <Typography><span style={{fontWeight:"bold"}} >Corporate Office:</span>SCO-127, New Dana Mandi, Karawara,Jalandhar Byepass Road, Ludiana (Pb.)-INDIA</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default ContactForm