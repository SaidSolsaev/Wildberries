import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import FeauteredCategories from '../../components/FeaturedCategories/FeaturedCategories.jsx'
import MainIcons from '../../components/MainIcons/MainIcons.jsx'


const Home = () => {
    return (
        <div className='homeContainer'>
            <Navbar />
            <Header />
            <MainIcons />
            <FeauteredCategories />
        </div>
    )
}

export default Home