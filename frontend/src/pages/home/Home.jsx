import React, {useEffect, useState} from 'react'
import useFetch from '../../hooks/useFetch.js'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import FeauteredCategories from '../../components/FeaturedCategories/FeaturedCategories.jsx'
import MainIcons from '../../components/MainIcons/MainIcons.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import CampaignGrid from '../../components/CampaignGrid/CampaignGrid.jsx'
import Spacer from '../../components/Spacer/Spacer.jsx'
import Carousel from '../../components/Carousel/Carousel.jsx'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner.jsx'


const Home = () => {

    const {data, loading} = useFetch(`/product`);
    const [bestsellers, setBestsellers] = useState([]);
    const [allProducts, setAllProducts] = useState([]);

    let strawberry_id = process.env.REACT_APP_STRAWBERRY_CAT_ID;
    

    useEffect(() => {
        setBestsellers(data.filter((item) => item.isFeatured))
        setAllProducts(data.filter((item) => item.category === strawberry_id));
    },[data])


    return (
        <div className='homeContainer'>
            <Navbar />
            <Header />
            <MainIcons />
            <FeauteredCategories />
            {loading ? <LoadingSpinner /> : <Carousel title={"Våre bestselgere"} products={bestsellers}/>}
            <Spacer />
            <CampaignGrid />
            <Spacer title="Våre produkter"/>
            {loading ? <LoadingSpinner /> :<Carousel title={"Jordbær"} products={allProducts}/> }
            <Spacer />
            <Footer />
        </div>
    )
}

export default Home