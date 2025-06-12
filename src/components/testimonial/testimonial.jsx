import './testimonial.css';
import { Images } from '../../assets/images';
import { useRef, useEffect } from 'react';

function Testimonial() {
    const testimonial = [
        {
            name: 'SHAWN DANAHY',
            address: 'Derry, NH',
            review: "Owner is professional, well priced, and has a great team of guys behind him. They did an amazing job on our barn roof. Was not an easy job but they got it done on time, neat, and came in at the price he quoted me for. Would recommend for any type of project."
        },
        {
            name: 'Michelle YESILTEPE',
            address: 'Waltham, MA',
            review: "Jerry and his crew were such a wonderful help in the remodel of our kitchen! We had a flood and the recommended contractor by our insurance kept us in limbo for 3 months. Finally we found Jerry and he was able to start the work in only a few days and had it done in three weeks!! His team is so efficient and kind."
        },
        {
            name: 'WENDY MARIE',
            address: 'North Hampton, NH',
            review: "I’ve had Jerry and crew twice to do projects; a few years back a 15x40 composite deck and today a cabana type thing for new hot tub. While there he repaired a small thing with deck (that i didnt notice) for free. They are honest, hardworking and communicate well!  Highly recommend."
        }
    ];

    const testimonialB = useRef();

    function slideUp() {
        if (window.location.pathname == "/") {
            if (window.innerHeight * 0.9 >= testimonialB.current.getBoundingClientRect().top) {
                testimonialB.current.classList.add("slide-up");
            } else {
                testimonialB.current.classList.remove("slide-up");
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", slideUp);

        return () => {
            if (window.location.pathname == "/") {
                testimonialB.current.classList.remove("slide-up");
            }
        }
    }, []);

    return (
        <div className="testimonial-comp">
            <div className="t-top">
                <div className="t-screen"></div>
                <img src={Images.testimonial} alt="" />
            </div>

            <div className="t-base" ref={testimonialB}>
                <div className="t-headline">⭐⭐⭐⭐⭐ WHAT OUR CLIENTS SAY!</div>
                <h2>We Let Our Work & Our Clients Do The Talking.</h2>
                <div className="testimonial-wrap">
                    {testimonial.map((review, i) => (
                        <div className="t-reviews" key={i}>
                            <div className="review">
                                <div className="big-circle"></div>
                                <div className="small-circle"></div>
                                <p>{review.review}</p>
                            </div>
                            <p className='a'>{review.name}</p>
                            <p className='t-address'>{review.address}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="base-rev">
                <a className='facebook-review' href="https://web.facebook.com/profile.php?id=61561524758658&sk=reviews" target='_blank'><img src={Images.review} alt="" /></a>
            </div>
        </div>
    )
}

export default Testimonial;