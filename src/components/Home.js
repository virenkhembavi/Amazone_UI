import React from 'react'
import './Home.css'
import Product from './Product'
import { connect } from "react-redux"
import { fetchStoreData } from '../redux/reducer/storeReducer'
import { useEffect } from 'react'
// import { fetchStoreDataByCateg } from '../redux/reducer/catergoriesReducer

function Home(props) {
    const { fetchUsers, Data } = props
    let storedData = Data.data

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div className="home">
            <div className="home-container">
                <img className="home-Image" src="https://cdn.iphoneincanada.ca/wp-content/uploads/2018/04/amazon-prime-video.png" alt="home-banner" />
            </div>
            <div className="home-row">
                {storedData?.map(item => {
                    return (
                        <Product id="001"
                            key={item.id}
                            title={item.title}
                            prize={item.price}
                            image={item.image}
                            rating={5}
                        />
                    )
                })}
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
                {storedData?.map(item => (
                    <Product id="001"
                        title={item.title}
                        prize={item.price}
                        image={item.image}
                        rating={5}
                    />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        Data: state.storeData,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchStoreData()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)