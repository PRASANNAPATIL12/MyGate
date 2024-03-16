import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, MenuItem, Menu ,Button,styled,Divider,Box} from '@mui/material';

const Banner=styled(Box)(()=>({
    justifyContent:'center',
    alignContent:'center',
    display:'flex'
}))

export const Banner2 = () => {
  return (
    <Banner >
        <img src="https://mygate.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-05-at-2.48.24-PM.jpeg" alt="banner2 image" />
    </Banner>
  )
}



export default Banner2;