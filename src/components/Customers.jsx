// import { AppBar, Toolbar, Typography, IconButton, MenuItem, Menu ,Button,styled,Divider,Box} from '@mui/material';

// import React from 'react'

// const customersobj={
//     p1:{img:'https://mygate.com/wp-content/uploads/2022/10/Rabiya-Aftab-1.png',
//     name:'Jogesh',
//     desc:'Treasurer, Narayan Enclave',
//     info:'An all-in-one solution for societies. Our residents feel more secure with children playing without supervision and the committee also finds it easier to manage finances and communication.'},
    
//     p2:{img:'https://mygate.com/wp-content/uploads/2022/10/Venkatesh-G-V.png',
//     name:'Venkatesh G V',
//     desc:'President, Novus Florence',
//     info:'With MyGate, we were able to streamline our invoice generation, receipt generation and other accounting processes. Our auditor is also pleased as it integrates with softwares like Tally.'},

//     p2:{img:'https://mygate.com/wp-content/uploads/2022/10/Venkatesh-G-V.png',
//     name:'Rabiya Aftab',
//     desc:'President at Appaswamy Cityside',
//     info:'The connectivity with the guards was a big issue earlier. Thanks to MyGate, we are now in a situation where we get to know about each and every visitor. Their staff gave us a lot of handholding, particularly for onboarding security personnel.'},
// }



// export const Customers = () => {
//   return (
//     <Box>
//         <Typography style={{fontSize:'32px',lineHeight:'40px',margin:'50px 0 70px ',textAlign:'center',fontWeight:'700'}}>What our customers say</Typography>

//     </Box>
//   )
// }


// export default Customers;



import React from 'react';
import { styled, Box,Typography } from '@mui/material';

const customersobj = {
  p1: {
    img: 'https://mygate.com/wp-content/uploads/2022/10/Jogesh-1.png',
    name: 'Jogesh',
    desc: 'Treasurer, Narayan Enclave',
    info:
      'An all-in-one solution for societies. Our residents feel more secure with children playing without supervision and the committee also finds it easier to manage finances and communication.',
  },

  p2: {
    img: 'https://mygate.com/wp-content/uploads/2022/10/Venkatesh-G-V.png',
    name: 'Venkatesh G V',
    desc: 'President, Novus Florence',
    info:
      'With MyGate, we were able to streamline our invoice generation, receipt generation and other accounting processes. Our auditor is also pleased as it integrates with softwares like Tally.',
  },

  p3: {
    img: 'https://mygate.com/wp-content/uploads/2022/10/Rabiya-Aftab-1.png',
    name: 'Rabiya Aftab',
    desc: 'President at Appaswamy Cityside',
    info:
      'The connectivity with the guards was a big issue earlier. Thanks to MyGate, we are now in a situation where we get to know about each and every visitor. Their staff gave us a lot of handholding, particularly for onboarding security personnel.',
  },
};

const CustomerCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  marginBottom: theme.spacing(3),
  boxShadow: '0px 0px 20px 12px rgba(0, 0, 0, 0.1)',

  '& img': {
    width: '115px',
    height: '115px',
    borderRadius: '50%',
    boxShadow: '0px 0px 20px 12px rgba(0, 0, 0, 0.1)',
    padding:'6px',
    marginBottom: theme.spacing(1),
    '&:hover': {
        transform: 'scale(1.05)',
        transition: 'transform 0.3s ease',
      }
  },
  
  '&:hover': {
    transform: 'scale(1.05)',
    transition: 'transform 0.3s ease',
  }
,

  '& .customer_name, .customer_position': {
    margin: 0,
  },
  '& p': {
    textAlign: 'center',
  },
}));

const CustomerReviewContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: theme.spacing(3),
  justifyContent: 'center',
  padding: theme.spacing(3),
  margin:'2% 2%',    

}));

const Customers = () => {
  return (

    <>
    <Typography style={{fontSize:'32px',lineHeight:'40px',margin:'50px 0 70px ',textAlign:'center',fontWeight:'700'}}>What our customers say</Typography>

    <CustomerReviewContainer>
      {Object.values(customersobj).map((customer, index) => (
          <CustomerCard key={index}>
          <img src={customer.img} alt={`Customer ${index + 1}`} />
          <div className="cutomer-info">
            <p className="customer_name">
              <b>{customer.name}</b>
            </p>
            <p className="customer_position">{customer.desc}</p>
            <p>{customer.info}</p>
          </div>
        </CustomerCard>
      ))}
    </CustomerReviewContainer>
      </>
  );
};

export default Customers;
