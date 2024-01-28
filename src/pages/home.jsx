import React from 'react'
import Header from './Components/Header'
import Image from '../resources/headerbg.png'
import "../pageStyle/home.scss"
function Home() {
    return (
        <>
            <Header />
            <div className="main-body">
                <div className="left-side-description">
                    <h1>Learn Things that Actually Matters </h1>
                    <p>With Great Explaination , A great Illustration and Insightful Roadmaps</p>
                    <button>Start Learning</button>
                </div>
                <div className="right-side-description">
                    <img src={Image}></img>
                </div>
            </div>
        </>
    )
}

export default Home