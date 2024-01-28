import React from 'react'
import "./Style/Header.scss";

function Header() {
    return (
        <>
            <div className='parent-container'>
                <div className="left-side-content">
                    <p>Articles</p>
                    <p>Problems</p>
                    <p>Illustrations</p>

                </div>


                <div className="logo">
                    <h2 className='logo-coders'>{"{ Data-Structures }"}</h2>
                </div>
                <div className="right-side-container">
                    <p>Guided Paths</p>
                    <button>Sighn Up </button>

                </div>
            </div>

        </>
    )
}

export default Header