import './aboutComp.css';
import { useNavigate } from 'react-router-dom';
import { Images } from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef } from 'react';

function AboutComp() {
    const navigate = useNavigate();
    const aboutT = useRef();
    const aboutB = useRef();
    const videoRef = useRef(null);

    // Slide-up animation
    function slideUp() {
        if (window.location.pathname === "/") {
            if (window.innerHeight * 0.9 >= aboutT.current.getBoundingClientRect().top) {
                aboutT.current.classList.add("slide-up");
            } else {
                aboutT.current.classList.remove("slide-up");
            }

            if (window.innerHeight * 0.9 >= aboutB.current.getBoundingClientRect().top) {
                aboutB.current.classList.add("slide-up");
            } else {
                aboutB.current.classList.remove("slide-up");
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", slideUp);

        return () => {
            window.removeEventListener("scroll", slideUp);
            if (window.location.pathname === "/") {
                aboutT.current?.classList.remove("slide-up");
                aboutB.current?.classList.remove("slide-up");
            }
        };
    }, []);

    useEffect(() => {
        const video = videoRef.current;

        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play().then(() => {
                        video.muted = false;
                    }).catch(err => {
                        console.log("Autoplay with sound may be blocked:", err);
                    });
                } else {
                    video.pause();
                }
            },
            { threshold: 0.6 }
        );

        observer.observe(video);

        return () => observer.unobserve(video);
    }, []);

    return (
        <div className="about-comp">
            <div className="about-comp-imgs" ref={aboutT}>
                <video
                    id="ncVideo"
                    ref={videoRef}
                    src={Images.ncVideo}
                    loop
                    controls
                ></video>
            </div>

            <div className="about-comp-text" ref={aboutB}>
                <div className="a-headline">ABOUT US</div>
                <h2>🏗️ More Than Contractors — We’re Dream Builders</h2>
                <p>
                    Based in New Hampshire and fully insured, our team brings years of experience,
                    precision, and integrity to every job—no matter the size. From emergency repairs
                    to full-scale remodels, we pride ourselves on quality workmanship, clear communication,
                    and doing the job right the first time.
                </p>
                <div className="about-bullet">
                    <div className="item">
                        <FontAwesomeIcon className='a-check' icon={faCheck} />
                        <span>Fully Insured</span>
                    </div>
                    <div className="item">
                        <FontAwesomeIcon className='a-check' icon={faCheck} />
                        <span>Quality Work</span>
                    </div>
                    <div className="item">
                        <FontAwesomeIcon className='a-check' icon={faCheck} />
                        <span>Timely Service</span>
                    </div>
                    <div className="item">
                        <FontAwesomeIcon className='a-check' icon={faCheck} />
                        <span>Good Rates</span>
                    </div>
                </div>
                <a href="#" onClick={() => navigate("/about")}>Learn &nbsp;More</a>
            </div>
        </div>
    );
}

export default AboutComp;
