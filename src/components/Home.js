import React from 'react'
import './Home.css'
import Product from './Product'


function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <img className="home-Image" src="https://cdn.iphoneincanada.ca/wp-content/uploads/2018/04/amazon-prime-video.png" />
            </div>
            <div className="home-row">
                <Product id="001"
                    title='The Dead Are Arising: The Life of Malcolm X'
                    prize={29.10}
                    image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhm4CA53z6UZQ0pz9_DP49TiJpe31BrGStRQ&usqp=CAU'}
                    rating={5}
                />
                <Product id="002"
                    title='All-new Echo Dot (4th Gen) | Next generation smart speaker with improved bass and Alexa (Blue)'
                    prize={300.00}
                    image={'https://m.media-amazon.com/images/I/61MbLLagiVL._AC_UY218_.jpg'}
                    rating={5}
                />

            </div>
            <div className="home-row">
                <Product id="003"
                    title='realme Fashion Watch 1.4" Large HD Color Display, Full Touch Screen, SpO2, Continuous Heart Rate Monitor'
                    prize={250.00}
                    image={"https://m.media-amazon.com/images/I/71pYXdg9+IL._AC_UY218_.jpg"}
                    rating={4}
                />
                <Product id="004"
                    title='Redmi Note 9 Pro (Aurora Blue, 4GB RAM, 64GB Storage) - Latest 8nm Snapdragon 720G &amp; Alexa Hands-Free'
                    prize={420.00}
                    image={'https://m.media-amazon.com/images/I/811axeBSeRL._AC_UY218_.jpg'}
                    rating={5}
                />
                <Product id="005"
                    title='Help Mart Mens Coats Jackets Winter Casual Fashion Pure Color Patchwork Jacket Zipper Outwear Coat '
                    prize={600.00}
                    image={'https://m.media-amazon.com/images/I/41kpS4bT4vL._AC_UL320_.jpg'}
                    rating={5}
                />
            </div>
            <div className="home-row">
                <Product id="006"
                    title='Honeytecs Smart Rings NFC Multifunctional Waterproof Intelligent Ring Smart Wear Finger Digital Ring Smart Accessories'
                    prize={300.00}
                    image={'https://m.media-amazon.com/images/I/61HWJLtlwUL._AC_UL320_.jpg'}
                    rating={2}
                />
            </div>


        </div>
    )
}

export default Home
