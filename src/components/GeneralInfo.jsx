import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, MenuItem, Menu ,Button,styled,Divider,Box} from '@mui/material';


const Wrapp=styled(Box)(({theme})=>({
    

[theme.breakpoints.down('md')]:{
    display:'block'
}
  
  }))


export const GeneralInfo = () => {
  return (
    <Wrapp style={{width:'256px',width:'100%',backgroundColor:'#f3f3f3',display:'flex',justifyContent:'center',alignItems:'center'}}>


          <div style={{ display: 'flex',marginRight:'10%',marginTop:'50px',marginBottom:'50px' }}>

              <img src="https://mygate.com/wp-content/uploads/2023/04/societies.jpg" alt="societies" style={{ borderRadius: '50%', height: '40px', width: '45px', background: '#fff', boxShadow: '6px 12px 15px 5px #e9e7e7', transition: 'all .7s', padding: '15px', verticalAlign: 'center',marginRight:'12px' }} />

              <Typography level="h2" z><span style={{ display: 'block', fontSize: '29px', fontWeight: '700', color: '#212121', marginBottom: '-34px' }}>25,000+</span><br />
                  societies</Typography>

          </div>
        <div style={{display:'flex',marginRight:'10%' ,marginTop:'50px',marginBottom:'50px'}}>

              <img src="https://mygate.com/wp-content/uploads/2022/10/home.webp" alt="societies" style={{ borderRadius: '50%',height: '40px', width: '45px', background: '#fff', boxShadow: '6px 12px 15px 5px #e9e7e7', transition: 'all .7s', padding: '15px', verticalAlign: 'center',marginRight:'12px' }} />

              <Typography level="h2" z><span style={{ display: 'block', fontSize: '29px', fontWeight: '700', color: '#212121', marginBottom: '-34px' }}>3.5 million+ </span><br />
              homes</Typography>

          </div>
          <div style={{ display: 'flex' ,marginTop:'50px',marginBottom:'50px' }}>

              <img src="https://mygate.com/wp-content/uploads/2022/10/city-1.webp" alt="societies" style={{ borderRadius: '50%', height: '40px', width: '45px', background: '#fff', boxShadow: '6px 12px 15px 5px #e9e7e7', transition: 'all .7s', padding: '15px', verticalAlign: 'center',marginRight:'12px' }} />

              <Typography level="h2" z><span style={{ display: 'block', fontSize: '29px', fontWeight: '700', color: '#212121', marginBottom: '-34px' }}>27 major</span><br />
              cities</Typography>

          </div>



    </Wrapp>
  )


}

export default GeneralInfo;

