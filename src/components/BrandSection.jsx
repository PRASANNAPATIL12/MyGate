import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, MenuItem, Menu, Button, styled, Divider, Link,Box } from '@mui/material';

const brands = {
    brand1:'https://mygate.com/wp-content/uploads/2022/10/brand-clubmahindra.webp',
    brand2:'https://mygate.com/wp-content/uploads/2022/10/brand-swiggy.webp',
    brand3:'https://mygate.com/wp-content/uploads/2023/03/Amazon.png',
    brand4:'https://mygate.com/wp-content/uploads/2023/03/Honda.png',
    brand5:'https://mygate.com/wp-content/uploads/2022/10/goodrej-logo.webp',
    brand6:'https://mygate.com/wp-content/uploads/2023/03/TATA_1mg.png',
    brand7:'https://mygate.com/wp-content/uploads/2023/03/hul.jpg',
    brand8:'https://mygate.com/wp-content/uploads/2023/03/lufthansa-.jpg',
    brand9:'https://mygate.com/wp-content/uploads/2023/03/samsung.logo_.jpg',
    brand10:'https://mygate.com/wp-content/uploads/2023/04/Malabar.png',
    brand11:'https://mygate.com/wp-content/uploads/2023/04/Loreal.png',
    brand12:'https://mygate.com/wp-content/uploads/2023/03/byjus-logo.jpg',


}


const BrandCard = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    boxShadow: '0px 0px 17px 5px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    // border:'2px solid black',
    marginBottom: theme.spacing(3),
    '& img': {
      width: '45  .px',
      height: '40px',

      borderRadius: '50%',
      marginBottom: theme.spacing(1),
    },
    '&:hover': {
      transform: 'scale(1.05)',
      transition: 'transform 0.3s ease',
    },
  }));
  
  const LearnMore = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    marginTop: theme.spacing(1),
  }));
  
  const Brands = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: theme.spacing(3),
    justifyContent: 'center',
    padding: theme.spacing(3),
    margin:'60px 100px ',
    
  }));
  
  const BrandSection = () => {
    return (
        <>
        <Typography level="h1" style={{ justifyContent: 'center', textAlign: 'center', fontSize: '32px', fontWeight: 'bold', marginTop: '43px' }}>Join the Club!</Typography>

        <Typography style={{ justifyContent: 'center', textAlign: 'center', fontWeight: '400', fontSize: '17px', lineHeight: '27px', margin: '10px auto 78px', width: '756px' }} >The nation's top brands are bringing rich experiences to our gated communities - on the app and in the society, too.</Typography>
        
      <Brands>
        {Object.values(brands).map((brand, index) => (
            <BrandCard key={index}>
            <img src={brand} alt={`Brand ${index + 1}`} />
            <LearnMore href="#">Learn More</LearnMore>
          </BrandCard>
        ))}
      </Brands>
        </>
    );
  };

  export default BrandSection;



