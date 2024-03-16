// import React from 'react';
// import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import Navbar from './Navbar';

// const Header = () => {
//   return (
//     <AppBar position="static" style={{background:'white',height:'95px',display: 'flex' }}>
//       <Toolbar>     

//         <img src="https://mygate.com/wp-content/uploads/2023/11/MyGate-Logo-Horizontal-2-e1700723514639.png" alt="Logo" style={{ marginRight: '10px', maxHeight: '56px',marginTop:'20px ',marginLeft:'60px',maxWidth:'200px' }}  />

//         {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{color:'black'}}>
//            Title
//         </Typography> */}

//         <Navbar/>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;

import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, MenuItem, Menu ,Button,styled,Divider} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from './Navbar';
import { useState } from 'react';

const lessthanlg=styled('div')(({theme})=>({


  [theme.breakpoints.down('lg')]:{
    marginLeft:'217px'
  }

}))

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [anchorE3, setAnchorE3] = React.useState(null);

  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl(null);
  };

  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorE2(null);
  };

  const handleClick3 = (event) => {
    setAnchorE3(event.currentTarget);
  };

  const handleClose3 = () => {
    setAnchorE3(null);
  };

  return (
    <AppBar position="static" style={{ position:'sticky',background: 'white', height: '95px', display: 'flex',top:'0%',zIndex:'5' }}>
      <Toolbar>
        <IconButton>

        <img
          src="https://mygate.com/wp-content/uploads/2023/11/MyGate-Logo-Horizontal-2-e1700723514639.png"
          alt="Logo"
          style={{ marginRight: '10px', marginTop: '12px', maxHeight: '56px', marginLeft: '50px', maxWidth: '200px',verticalAlign:'center' }}
          />
          </IconButton>
          <Divider />

        <lessthanlg style={{ display: 'flex', alignItems: 'center' ,verticalAlign:'center',marginTop: '12px',fontSize:'14px',marginLeft:'217px'}}>
     

          <IconButton size="large" color="inherit" >
              <Typography variant="h6" component="div" style={{ color: 'black',fontSize:'14px' }}>
              Now for Offices
              </Typography>
            </IconButton>

            
          <IconButton size="large" color="inherit" >
              <Typography variant="h6" component="div" style={{ color: 'black',fontSize:'14px' }}>
              Now in UAE
              </Typography>
            </IconButton>

            


          {/* Navbar items with dropdown for "Projects" */}
          <div>
            <IconButton size="large" color="inherit" onClick={handleClick1} onTouchMove={handleClick1} >
              <Typography variant="h6" component="div" style={{ color: 'black',fontSize:'14px' }}>
              Society Solutions
              </Typography>
            </IconButton>

            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose1}>
              <MenuItem onClick={handleClose1}>Community Management</MenuItem>
              <MenuItem onClick={handleClose1}>Apartment Accounting</MenuItem>
              <MenuItem onClick={handleClose1}>Benefits for Residents</MenuItem>
              <MenuItem onClick={handleClose1}>All MyGate Features</MenuItem>
            </Menu>


            <IconButton size="large" color="inherit" onClick={handleClick2} onTouchMove={handleClick2}>
              <Typography variant="h6" component="div" style={{ color: 'black',fontSize:'14px' }}>
                                            Brand Solutions

              </Typography>
            </IconButton>
            
            <Menu anchorE2={anchorE2} open={Boolean(anchorE2)} onClose={handleClose2}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center', // Center the menu below the anchor
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center', // Center the menu below the anchor
                          }}
                          style={{left:'250px',top:'-25px'}}
                          >
              <MenuItem onClick={handleClose2}>Ad Platform</MenuItem>
              <MenuItem onClick={handleClose2}>Industries</MenuItem>
              <MenuItem onClick={handleClose2}>Ad Type</MenuItem>
            </Menu>

            <IconButton size="large" color="inherit" onClick={handleClick3} onTouchMove={handleClick3} style={{position:'relative'}}>
              <Typography variant="h6" component="div" style={{ color: 'black',fontSize:'14px' }}>
              About Us
              </Typography>
            </IconButton>

            <Menu anchorE3={anchorE3} open={Boolean(anchorE3)} onClose={handleClose3}
             anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center', // Center the menu below the anchor
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center', // Center the menu below the anchor
            }}
            style={{left:'380px',top:'-25px'}} >
              <MenuItem onClick={handleClose3}>Our Story</MenuItem>
              <MenuItem onClick={handleClose3}>Careers</MenuItem>
              <MenuItem onClick={handleClose3}>Data Privacy</MenuItem>
              <MenuItem onClick={handleClose3}>Blog</MenuItem>
              <MenuItem onClick={handleClose3}>FAQs</MenuItem>
            </Menu>


            <IconButton size="large" color="inherit" style={{marginRight:'22px'}}>
              <Typography variant="h6" component="div" style={{ color: 'black',fontSize:'14px' }}>
                Login
              </Typography>
            </IconButton>

            <Button variant="contained" style={{background:'linear-gradient(270deg,#FAAF3A 0%,#F7635B 52.6%,#F75878 100%)',borderRadius:'7px'}}>Book a demo</Button>

          </div>
          
          {/* Add other navbar items here, such as "Contact", "Achievements", etc. */}
        </lessthanlg>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
