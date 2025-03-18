
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
    {
        name: "John Williams",
        role: "Lead Designer",
        text: "I’ve tried every home remedy and hair care treatment but ended up with long waits and no results. Since I’ve started using Hims my hair has grown, thickened, and darkened tremendously.",
        rating: 5,
        image: "/testimoinals/profile.png",
        quote: "/icons/quote.svg"
    },
    {
        name: "John Williams",
        role: "Lead Designer",
        text: "I’ve tried every home remedy and hair care treatment but ended up with long waits and no results. Since I’ve started using Hims my hair has grown, thickened, and darkened tremendously.",
        rating: 4,
        image: "/testimoinals/profile.png",
        quote: "/icons/quote.svg"
    },
    {
        name: "John Williams",
        role: "Lead Designer",
        text: "I’ve tried every home remedy and hair care treatment but ended up with long waits and no results. Since I’ve started using Hims my hair has grown, thickened, and darkened tremendously.",
        rating: 3,
        image: "/testimoinals/profile.png",
        quote: "/icons/quote.svg"
    },
    {
        name: "John Williams",
        role: "Lead Designer",
        text: "I’ve tried every home remedy and hair care treatment but ended up with long waits and no results. Since I’ve started using Hims my hair has grown, thickened, and darkened tremendously.",
        rating: 5,
        image: "/testimoinals/profile.png",
        quote: "/icons/quote.svg"
    },
    {
        name: "John Williams",
        role: "Lead Designer",
        text: "I’ve tried every home remedy and hair care treatment but ended up with long waits and no results. Since I’ve started using Hims my hair has grown, thickened, and darkened tremendously.",
        rating: 5,
        image: "/testimoinals/profile.png",
        quote: "/icons/quote.svg"
    },

];

const Testimonials = () => {
    return (
        <section className="ufc-testimonials-area">
            <h3>Hear What <span>Rizz</span> Patients Have To Say</h3>

            <div className="ufc-testimonial-content">
                <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={20}
                    slidesPerView={1.2}
                    loop={true}
                    pagination={{ clickable: true }}
                    navigation={false}
                    slidesOffsetBefore={16}
                    breakpoints={{
                        451: { slidesPerView: 1,centeredSlides:false }, // Fixed key
                        768: {
                            slidesPerView: 2,
                            centeredSlides: true,
                            lidesOffsetBefore: 0,
                        }, // Fixed key
                        992: { slidesPerView: 3 }, // Fixed key
                        1200: { slidesPerView: 4 }, // Fixed key
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index} className="ufc-testimonial-card">
                            <img className="testimonial-quote" src={testimonial.quote} alt="quote" />
                            <p className="testimonial-text">"{testimonial.text}"</p>
                            <div className="stars">
                                {[...Array(testimonial.rating)].map((_, index) => (
                                    <img key={index} src="/icons/star.png" alt="Star" className="star-icon" />
                                ))}

                                {[...Array(5 - testimonial.rating)].map((_, i) => (
                                    <img key={`empty-${i}`} src="/icons/blank_start.png" alt="Empty Star" />
                                ))}
                            </div>
                            <div className="profile">
                                <img src={testimonial.image} alt={testimonial.name} />
                                <div>
                                    <h4>{testimonial.name}</h4>
                                    <p>{testimonial.role}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
