import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import FeauteredCategories from '../../components/FeaturedCategories/FeaturedCategories.jsx'
import MainIcons from '../../components/MainIcons/MainIcons.jsx'
import BestSellers from '../../components/BestSellers/BestSellers.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import CampaignGrid from '../../components/CampaignGrid/CampaignGrid.jsx'
import ProductSlider from '../../components/ProductSlider/ProductSlider.jsx'


const Home = () => {
    return (
        <div className='homeContainer'>
            <Navbar />
            <Header />
            <MainIcons />
            <FeauteredCategories />
            <BestSellers />
            <CampaignGrid />
            <ProductSlider title={"Jordbær"} url={"product/getByCategory/65e11504fcbab65d26aab787"}/>
            <Footer />
        </div>
    )
}

export default Home