import React from 'react';

const Footer = () => {
    return (
        <footer className='ufc-footer-area'>
            <div className="container">
                <div className="ufc-footer-content">

                    <div className="ufc-top-footer-content">

                        <div className="ufc-top-footer-left-content">
                            <div className="ufc-top-footer-left-txt-input">
                                <h3>Let’s Stay In
                                    Touch</h3>
                                <p>Keep up to date with our latest news &
                                    special offers.</p>
                                <div className="ufc-top-footer-left-input-field">
                                    <input type="email" placeholder='enter your email' />
                                    <button><img src="/icons/sent.png" alt="sent" /></button>
                                </div>
                            </div>
                        </div>



                        <div className="ufc-top-footer-middle-content">
                            <div className="single-ufc-top-footer-content">
                                <p>Quick Links</p>
                                <a href="#">Erectile Dysfunction</a>
                                <a href="#">Weight Loss</a>
                                <a href="#">Men’s Hair Loss</a>
                            </div>
                            <div className="single-ufc-top-footer-content">
                                <p>Contact Info</p>
                                <a className='flex' href="mailto:hello@rizzpharma.com"><img src="/icons/mail.png" alt="contact" /> hello@rizzpharma.com</a>
                            </div>
                        </div>



                        <div className="ufc-top-footer-right-content">
                            <div className="single-ufc-top-footer-content">
                                <p>Our Company</p>
                                <a href="#">HIPAA Notice</a>
                                <a href="#">Privacy Policy</a>
                                <a href="#">Return & Refund Policy</a>
                                <a href="#">Terms Of Use</a>
                                <a href="#">CCPA Opt-Out</a>
                                <a href="#">Opt-Out Preferences</a>
                            </div>
                        </div>
                    </div>


                    <div className="ufc-middle-footer-content">

                        <div className="ufc-middle-footer-left-content">
                            <div className="ufc-middle-footer-left-img">
                                <img src="/footer/hippa.png" alt="Image" />
                            </div>
                        </div>

                        <div className="ufc-middle-footer-right-content">
                            <div className="ufc-middle-footer-right-socials flex">
                                <a href="#"><img src="/icons/facebook2.png" alt="Image" /></a>
                                <a href="#"><img src="/icons/instagram.png" alt="Image" /></a>
                            </div>
                            <div className="ufc-middle-footer-right-text flex">
                                <img src="/footer/hims.png" alt="image" />
                                <p>Copyright © 2024 Rizz Pharma All Right Reserved - Built by Business Web Social</p>
                            </div>
                        </div>

                    </div>



                    <div className="rizz-pharma-img">
                        <img src="/footer/rizz.png" alt="Image" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;