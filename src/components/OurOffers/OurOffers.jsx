import React from 'react';

const OurOffers = () => {
    return (
        <div className='ufc-our-offers-area'>
            <div className="container">
                <div className="ufc-our-offers-content">
                    {/* single item  */}
                    <div className="single-ufc-our-offer flex">
                        <img src="/public/icons/p1.png" alt="offerIcon" />
                        <p>Secure Payment</p>
                    </div>
                    {/* single item  */}

                    {/* single item  */}
                    <div className="single-ufc-our-offer flex">
                        <img src="/public/icons/p2.png" alt="offerIcon" />
                        <p>Online Support</p>
                    </div>
                    {/* single item  */}

                    {/* single item  */}
                    <div className="single-ufc-our-offer flex">
                        <img src="/public/icons/p3.png" alt="offerIcon" />
                        <p>Free Shipping</p>
                    </div>
                    {/* single item  */}

                    {/* single item  */}
                    <div className="single-ufc-our-offer flex">
                        <img src="/public/icons/p4.png" alt="offerIcon" />
                        <p>Best Value</p>
                    </div>
                    {/* single item  */}


                </div>
            </div>
        </div>
    );
};

export default OurOffers;