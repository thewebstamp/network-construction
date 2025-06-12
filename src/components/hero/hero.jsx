import './hero.css';
import { Images } from '../../assets/images';
import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();

    return (
        <div className="hero-wrap">
            <div className="hero-container">
                <div className="hero-background">
                    <img src={Images.heroImg1} alt="" />
                </div>
                <div className="hero">
                    <div className="hero-top">
                        <div className="small-headline">NETWORK CONSTRUCTION LLC</div>
                        <h1>Custom Construction & Remodeling Services Across New Hampshire.</h1>
                        <p>High-quality craftsmanship from roofing and siding to kitchens, decks, and full remodels. <br /><b>— If you can dream it, we can build it.</b></p>
                        <div className="hero-btn">
                            <a id='hero-f-btn' className='hero-f-btn' onClick={() => {navigate('/contact')}} href="#">Get Free Quote</a>
                            <a id='hero-s-btn' className='hero-s-btn' href="#services">See Services</a>
                        </div>
                    </div>

                    <div className="hero-base">
                        <img src={Images.heroImg3} alt="" />
                        <img src={Images.heroImg1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;