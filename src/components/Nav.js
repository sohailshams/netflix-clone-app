import React from 'react'
import './Nav.css';

function Nav() {
    return (
        <div className="nav">
            <div className="nav__contents">
                <img className="nav__logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix logo"/>
                <img className="nav__avatar" src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="netflix avatar"/>
            </div>
        </div>
    )
}

export default Nav