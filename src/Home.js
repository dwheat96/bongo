import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                {/* TODO: MAKE THIS A CAROUSEL TO MATCH IRL AMAZON */}
                {/* https://github.com/brainhubeu/react-carousel */}
                <img 
                className="home_image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2021/Other/RB-4451_SVOD_PD21_SellTest/GW-PV-DesktopTallHero_RB-4451_SVOD_TWAR_SellTest_Wave2_Settled_opt2_3000x1200._CB665601037_.jpg" 
                alt="prime video background" />

                {/* TODO: GIVE PRODUCTS AN ONHOVER EFFECT */}

                <div className="home_row">
                    <Product 
                    id="62441826"
                    title="EVGA GeForce GTX 1080 GAMING ACX 3.0, 8GB GDDR5X, LED, DX12 OSD Support (PXOC) Graphics Card 08G-P4-6181-KR"
                    price={689.99}
                    image="https://m.media-amazon.com/images/I/71LiI6a2sYL._AC_SL1200_.jpg"
                    rating={4}/>

                    <Product 
                    id="94441260"
                    title="BUG-A-SALT 3.0, Yellow"
                    price={44.95}
                    image="https://m.media-amazon.com/images/I/61ol2BfQt4L._AC_SL1500_.jpg"
                    rating={5}/>

                    <Product 
                    id="36139090"
                    title="Disney Zurg Talking Action Figure 15 inch"
                    price={49.99}
                    image="https://m.media-amazon.com/images/I/71mD5SZ3bBL._AC_SL1500_.jpg"
                    rating={3}/>
                </div>
                <div className="home_row">
                    <Product 
                    id="23745233"
                    title="Sony PlayStation 5 Disk Console Bundle With Extra DualSense Controller & 2 in 1 Tyler Screen Cleaner Gaming Surplus Oxergolader"
                    price={1097.00}
                    image="https://m.media-amazon.com/images/I/71aj6DLytUL._SL1500_.jpg"
                    rating={1}/>
                </div>
                <div className="home_row">
                    <Product 
                    id="62690547"
                    title="Sengled Smart Light Bulbs, Color Changing Alexa Light Bulb Bluetooth Mesh, Smart Bulbs That Work with Alexa Only, Dimmable LED Bulb A19 E26 Multicolor, High CRI, High Brightness, 9W 800LM, 4Pack"
                    price={35.99}
                    image="https://m.media-amazon.com/images/I/71KmSVwkm5L._AC_SL1500_.jpg"
                    rating={4}/>

                    <Product 
                    id="77160550"
                    title="HB Kang 100pk Disposable Face Mask Adult Protective 3 Layer Ear Loop Mouth Cover, Black"
                    price={14.99}
                    image="https://m.media-amazon.com/images/I/71+aHN0uysL._AC_SL1200_.jpg"
                    rating={5}/>
                </div>
            </div>
        </div>
    )
}

export default Home
