import React from "react";
import { IoChevronDownSharp } from "react-icons/io5";

const Header = () => {
    return (
        <header className="ufc-header-area">
            <div className="container">
                <div className="ufc-header-content">
                    {/*=== header left ===*/}
                    <div className="header-left-logo">
                        <a href="#"><img src="/logo/logo.png" alt="logo" /></a>
                    </div>
                    {/*=== header left ===*/}

                    {/*=== header right ===*/}
                    <div className="header-right-content">

                        {/* header top */}
                        <div className="header-right-top-content">
                            <nav className="rfc-nav-menu">
                                <ul>
                                    <li><a className="link" href="#">Home</a></li>
                                    <li><a href="#">Category <IoChevronDownSharp /></a>
                                        <div className="dropdown-content">
                                            <a href="#">Category 1</a>
                                            <a href="#">Category 2</a>
                                        </div>
                                    </li>
                                    <li><a href="#">Top Products <IoChevronDownSharp /></a>
                                        <div className="dropdown-content">
                                            <a href="#">Top Products 1</a>
                                            <a href="#">Top Products 2</a>
                                        </div>
                                    </li>
                                    <li><a className="link" href="#">Contact Us</a></li>
                                    <li><a className="link" href="#">FAQs</a></li>
                                </ul>
                            </nav>
                            <div className="header-right">
                                <a href="#"><img src="/icons/instagram.png" alt="Instagram" /></a>
                                <a href="#"><img src="/icons/facebook.png" alt="Facebook" /></a>
                            </div>
                        </div>
                        {/* header top */}

                        {/* header bottom */}
                        <div className="header-right-bottom-content">
                            <div className="header-right-bottom-button">
                                <a href="#">Sign Up</a>
                                <a href="#">Log In</a>
                            </div>
                            <div className="header-right-bottom-cart">
                                <a href="#"><img src="/icons/cart.png" alt="cart" /></a>
                            </div>

                        </div>
                        {/* header bottom */}


                    </div>
                    {/*=== header right ===*/}

                </div>
            </div>
        </header>
    );
};

export default Header;
