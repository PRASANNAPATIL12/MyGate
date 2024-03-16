import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, MenuItem, Menu, Button, styled, Divider, Box, Link ,Grid} from '@mui/material';

// const Cards = styled(Grid)(({theme})=>({
// display:'flex',
// marginLeft:'13%',
// marginRight:'6%',


//     [theme.breakpoints.down('md')]:{
//         display:'block'
//     }
// }))


// const Card=styled(Grid)(()=>({
//         flex: 1,
//         background: '#fff',
//         marginRight:'30px',
//         boxShadow :'0 0 15px rgba(0,0,0,.2)',
//         zIndex:2,



//         boxSizing:'inherit',
//         WebkitFontSmoothing:'antialiased',
//         wordBreak:'break-word',
//         wordWrap:'break-word'
    
// }))


const Cardimg=styled(Box)(()=>({
color:'#fff',
overflow:'hidden',
margin:'0px',
padding:'0px 0px 0px -9px',
tabSize:'23px',
width: '222px',
    height: '223px',
    display:'block'

}))

const Cardinf=styled(Box)(()=>({
    padding:'30px 20px',
    textAlign:'left',
    fontSize:'13px'

}))
const Cardinf1=styled(Box)(()=>({
    fontSize:'23px',
    lineHeight:'40px'
}))

const Cardinf2=styled(Box)(()=>({

    textAlign:'left',
    marginTop:'10px',
    fontSize:'17px',
    lineHeight:'27px',
    minHeight:'80px'
}))

const KnowMore=styled(Link)(()=>({

    display:'block',
    color:'#ef5446',
    fontSize:'17px',
    lineHeight:'22px',
    textAlign:'left',
    marginTop:'20px',
    textDecoration:'none',


}))



const Cards = styled(Grid)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',  // Center the cards horizontally
    margin: '0 -10px',  // Add some negative margin to accommodate spacing
    flexWrap: 'wrap',  // Allow the cards to wrap to the next line if needed
  }));
  
  const Card = styled(Grid)(({ theme }) => ({
    flex: '0 0 calc(25% - 20px)',  // 25% width for each card with spacing
    background: '#fff',
    marginRight: '20px',
    marginBottom: '20px',  // Add some spacing at the bottom
    boxShadow: '0 0 15px rgba(0, 0, 0, .2)',
    zIndex: 2,
    boxSizing: 'inherit',
    WebkitFontSmoothing: 'antialiased',
    wordBreak: 'break-word',
    wordWrap: 'break-word',
    paddingLeft:'0px',
    [theme.breakpoints.down('md')]: {
      flex: '0 0 100%',  // Full width on smaller screens
    },
  }));
  


export const Users = () => {
    return (
        <>

            <Typography style={{ textAlign: 'center', marginTop: '40px', marginBottom: '30px' }}><span style={{ fontSize: '32px', fontWeight: '700' }}>We simplify the complex!</span><br />
                <span style={{ color: '#595959' }}>For everything connected with the housing society, we have a digital solution.</span>
            </Typography>


            <Cards container rowSpacing={3}>

                <Card item lg={2} >

                    <Cardimg>
                        <img src="https://mygate.com/wp-content/uploads/2023/03/For-Society-1.jpg" alt="card1"
                         style={{height:'222px',width:'222px'}} />

                    </Cardimg>
                    <Cardinf>
                        <Cardinf1>For Societies</Cardinf1>
                        <Cardinf2>Meet your RWA's smart digital assistant.</Cardinf2>
                        <KnowMore>know more</KnowMore>
                    </Cardinf>
                </Card>


                <Card  item lg={2}>

                    <Cardimg>
                        <img src="https://mygate.com/wp-content/uploads/2023/03/For-Residents-1.jpg" alt="card2"
                         style={{height:'222px',width:'222px'}}  />

                    </Cardimg>
                    <Cardinf>
                        <Cardinf1>For Residents</Cardinf1>
                        <Cardinf2>Discover the benefits of full society connectivity.</Cardinf2>
                        <KnowMore>know more</KnowMore>
                    </Cardinf>
                </Card>


                <Card  item lg={2}>

                    <Cardimg>
                        <img src="https://mygate.com/wp-content/uploads/2023/03/images1.jpg" alt="card3" 
                         style={{height:'222px',width:'222px'}} />

                    </Cardimg>
                    <Cardinf>
                        <Cardinf1>For Developers</Cardinf1>
                        <Cardinf2>All your properties, now on one dashboard.</Cardinf2>
                        <KnowMore>know more</KnowMore>
                    </Cardinf>
                </Card>


                <Card  item lg={2}>

                    <Cardimg>
                        <img src="https://mygate.com/wp-content/uploads/2023/03/For-Society-1.jpg" alt="card1"
                         style={{height:'222px',width:'222px'}}  />

                    </Cardimg>
                    <Cardinf>
                        <Cardinf1>For Brands</Cardinf1>
                        <Cardinf2>Leverage the community effect for your brand.</Cardinf2>
                        <KnowMore>know more</KnowMore>
                    </Cardinf>
                </Card>

            </Cards>
        </>
    )
}


export default Users;