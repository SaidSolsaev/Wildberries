import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import FeauteredCategories from '../../components/FeaturedCategories/FeaturedCategories.jsx'
import MainIcons from '../../components/MainIcons/MainIcons.jsx'
import BestSellers from '../../components/BestSellers/BestSellers.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import CampaignGrid from '../../components/CampaignGrid/CampaignGrid.jsx'


const Home = () => {
    return (
        <div className='homeContainer'>
            <Navbar />
            <Header />
            <MainIcons />
            <FeauteredCategories />
            <BestSellers />
            <CampaignGrid />
            <Footer />
        </div>
    )
}

export default Home