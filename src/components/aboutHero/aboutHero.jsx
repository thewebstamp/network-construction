import './aboutHero.css';
import { Images } from '../../assets/images.js';

function AboutHero() {
    return (
        <div className="about-hero">
            <div className='ah-top'>
                <div className='img-wrap'>
                    <img className='ah-img-1' src={Images.about2} />
                    <img className='ah-img-2' src={Images.about1} />
                    <img className='ah-img-height' src={Images.about2} />
                </div>
            </div>
            
            <div className='ah-base'>
                <div className='ah-headline'>LEARN ABOUT US</div>
                <h2>🏗️ New Hampshire’s Trusted Experts in Home Construction</h2>
                <p>At Network Construction LLC, we believe every project is personal and deserves the highest attention to detail. Based in New Hampshire and fully insured, our skilled team brings decades of experience, precision, and integrity to every job—no matter the size or complexity. <br /><br />From emergency repairs to full-scale remodels and new custom builds, we pride ourselves on quality workmanship, clear communication, and doing the job right the first time, every time. Whether it's your dream deck, a new roof, or a custom kitchen, we're here to bring your vision to life—efficiently, affordably, and with lasting results.</p>
            </div>
        </div>
    )
}

export default AboutHero;