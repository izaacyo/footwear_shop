import React from 'react';

const Header = () => {

    return (

        <nav>
            <div className="navbar">
                <ul>
                    <li className="navbar_li">
                        <a className="homeLink" href="/">Home</a>
                        <a className="prductsLink" href="/Products">Products</a>
                        <a className="cartLink" href="/Cart">Cart</a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Header