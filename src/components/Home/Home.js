import React, { useEffect, useState } from 'react'
import "./Home.css";
import Product from "../Product/Product";

// Products Name n all details
// displayed in Row

function Home() {

    const [data, setData] = useState()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                console.log(json);
                const data = json.map((item) => {
                    item["rating"] = Math.floor(Math.random() * 6)
                    console.log(item);
                    return item
                })
                setData(data);
            })

    }, [])
    return (
        <div className="home">  {/* product banner */}
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="banner img" />
            <div className="home__container">
                {data?.map((item) => {
                    return (
                        <Product
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            image={item.image}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default Home
