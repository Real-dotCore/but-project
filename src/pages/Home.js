import React from 'react';
import Navigation from '../components/others/Navigation';
import Navigationtel from '../components/others/NavigationTel';
import Footer from '../components/others/Footer';
// import Banniere from '../components/pages/Home/Banniere';
import Contacts from '../components/pages/Home/Contacts';
// import Carousel from '../components/pages/Home/Carousel';
import Banner from '../components/pages/Home/Banner';
import ChoisirRoanne from '../components/pages/Home/ChoisirRoanne';
import NosAvantages from '../components/pages/Home/NosAvantages';
//import Newsletter from '../components/Newsletter';
import Popup from '../components/others/Popup';

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Navigationtel />
      <div className="homeContent">
        <Banner />
        <ChoisirRoanne />
        <NosAvantages />
        <Contacts />
        {/*<Newsletter />*/}
        <Popup />
      </div>
      <Footer />
    </div>
  );
};

export default Home;