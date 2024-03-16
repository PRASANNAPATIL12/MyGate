import logo from './logo.svg';
import './App.css';

//components
import Header from './components/Header';
import Banner from './components/Banner';
import GeneralInfo from './components/GeneralInfo';
import Users from './components/Users';
import Youtube from './components/Youtube';
import Banner2 from './components/Banner2';
import BrandSection from './components/BrandSection';
import Customers from './components/Customers';


function App() {
  return (<>
    <Header/>
    <Banner/>
    <GeneralInfo/>
    <Users/>
    <Youtube/>
    <Banner2/>
    <BrandSection/>
    <Customers/>

  </>
  );
}

export default App;
