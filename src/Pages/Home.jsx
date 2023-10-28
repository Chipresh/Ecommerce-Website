import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Carousel from '../Components/Carousel';
import Flashsales from '../Components/Flashsales';
import itemsData from '../Data/itemsData';
import Items from '../Components/Items';
import Categories from '../Components/Categories';
import Card from '../Components/Card';
import products from '../Data/products';

const Home = () => {
    const [items, setItems] = useState([]);
    const [visible, setVisible] = useState(5);

    const showMoreItems = () => {
        setVisible(prevValue => prevValue + 5);
    }
   
    const itemsDataMapper = itemsData.slice(0, visible).map(each => (
        <Items
            key={each.id}
            id={each.id}
            img={each.img}
            decrease={each.decrease}
            heart={each.heart}
            eye={each.eye}
            title={each.title}
            oldPrice={each.oldPrice}
            newPrice={each.newPrice}
            rating={each.rating}
            rating2={each.rating2}
            ratingReviews={each.ratingReviews} />
    ));

    // console.log(itemsDataMapper)

    const productsMapper = products.map(each => (
        <Card
            key={each.id}
            id={each.id}
            img={each.img}
            heart={each.heart}
            eye={each.eye}
            category={each.category}
            price={each.price}
            ratingStar={each.ratingStar}
            ratingRate={each.ratingRate}
        />
    ));
    // console.log(products)


    return (
        <main>
            <Navbar />
            <div className='flex mx-20'>
                <Sidebar />
                <Carousel />
            </div>
            <Flashsales />
            <div className=' justify-center items-center mx-20 '>
                <div className='flex flex-wrap items-center h-full w-full bg-white px-1 rounded-lg '>
                    {itemsDataMapper}
                </div>
                <div className='items-center justify-center  py-2'>
                    <button onClick={showMoreItems} className='bg-[#DB4444] h-10 w-40 text-center text-white p-2 rounded'>View All Products</button>
                </div>
            </div>
            <Categories />
            <div className='flex flex-wrap h-full w-[88%] justify-center mx-auto bg-white items-center gap-2 rounded-lg'>
                {productsMapper}
            </div>
        </main>
    );
}

export default Home;
