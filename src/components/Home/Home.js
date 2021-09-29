import React, { useEffect , useState } from 'react'
import "./Home.css";
import Product from "../Product/Product";

// Products Name n all details
// displayed in Row

function Home() {

const [data ,setData]  = useState()
      
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> {
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
            {/* creating comp n passing props*/}
            

            <div className="home__row">
                <Product
                    id="122"
                    title="Amazon speaker Echo"
                    price={6000}
                    rating={5}
                    image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQRi_dEsf2hULe1CfjoS1a_4WMiJYcQk-WH3yJ7-lR3_8D8_EBKhpS2-VX47PKgQNAKHvyokBa-Zzcu9tXUvYFlaYfVcJ8jzqLqobWdXXsw0rkPkXEntdlM&usqp=CAE"
                />

                <Product
                    id="123"
                    title="MI smart Brand"
                    price={3000}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/719ZywAmvOL._SL1500_.jpg"
                />


                <Product
                    id="126"
                    title="Portable Flexible USB LED Light"
                    price={600}
                    rating={2}
                    image="https://images-na.ssl-images-amazon.com/images/I/51vPBHWijqL._SL1500_.jpg"
                />

                <Product
                    id="124"
                    title="headphones"
                    price={1000}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Consumer_Electronics/ce_showcase/cat-tile/ce_showcase_cat-tile_desktop_headphones.jpg"
                />

                <Product
                    id="125"
                    title="Sleeping Bag, Pink, Skyblue2"
                    price={400}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61Hnv2RmM5L._SL1201_.jpg"
                />
            </div>

            {/* <i class="fa fa-amazon" aria-hidden="true"></i> */}

            <div className="home__row">

                <Product
                    id="125"
                    title="ASUS Laptop"
                    price={70000}
                    rating={3}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41jJOGDStyL._AC_SX184_.jpg"
                />

                <Product
                    id="111"
                    title="DELL DA300 USB-C Mobile Adapter (Black)"
                    price={4000}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Vdyp5iqDL._SX679_.jpg"
                />

                <Product
                    id="222"
                    title="Apple MAC Intel core I3"
                    price={100000}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/712B4P3yOnL._SL1500_.jpg"
                />

                <Product
                    id="333"
                    title="ZEBRONICS USB Gaming Mouse with RGB Lights"
                    price={3550}
                    rating={1}
                    image="https://images-na.ssl-images-amazon.com/images/I/714mGsjV9%2BL._SX522_.jpg"
                />
            </div>

            <div className="home__row">

                <Product
                    id="105"
                    title="Non-Stick kitchen set"
                    price={800}
                    rating={5}
                    image="data:image/jpeg;base64,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"
                />

                <Product
                    id="555"
                    title="Stainless steel Cookware"
                    price={400}
                    rating={2}
                    image="https://static.toiimg.com/thumb/msid-78060116,width-1200,height-900,resizemode-4/.jpg"
                />

                <Product
                    id="444"
                    title="Folding & Portable Outdoor Barbeque grill"
                    price={1000}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71RIDR40L9L._SL1498_.jpg"
                />

                <Product
                    id="888"
                    title="Microwave"
                    price={11000}
                    rating={4}
                    image="data:image/jpeg;base64,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"
                />
            </div>

            <div className="home__container"> 
             { data?.map((item) => {
                
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
