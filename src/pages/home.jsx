import React from 'react'
import Header from './Components/Header'
import Image from '../resources/codeblock-bg-removed.png'
import "../pageStyle/home.scss"
function Home() {
    return (
        <>
            <Header />
            <div className="main-body">
                <div className="left-side-description">
                    <h1>Learn Things That Actually Matters </h1>
                    <p>With Great Explaination , A Great Illustration And Insightful Roadmaps</p>
                    <button>Start Learning</button>
                </div>
                <div className="right-side-description">
                    <img src={Image} alt='header-image'></img>
                </div>
            </div>
        </>
    )
}

export default Home