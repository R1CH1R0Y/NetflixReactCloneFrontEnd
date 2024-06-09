import React from 'react'
import "./Banner.css";
const Banner = () => {
    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://wallpapercave.com/wp/wp5165869.jpg")`,
                backgroundPosition: "center center"
            }}>
            <div className="banner_contents">
                <h1 className='banner_title'>The Witcher</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_decription">
                    Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.
                </h1>
            </div>
            <div className="banner_fadeBottom"/>
        </header>
    )
}

export default Banner