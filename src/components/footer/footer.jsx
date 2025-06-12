import './footer.css';
import { useNavigate } from 'react-router-dom';
import { Images } from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

function Footer({home, about, contact }) {
    const navigate = useNavigate();

    return (
        <div className="footer-comp">
            <div className="f-top-1">
                <a href="#" onClick={()=>{navigate("/")}}><img src={Images.ddr_logo} alt="" /></a>
                <p>If You Can Dream It, We Can Build It.</p>
                <a href="mailto:Jjnetworkconstruction@gmail.com?Subject=Project Enquiry" target='_blank'><span>Email:</span>&nbsp; Jjnetworkconstruction @gmail.com</a>
                <a id='location' href="https://www.bing.com/maps?q=17+Beacon+hill+rd.%2C+03038&FORM=HDRSC6&cp=42.847828%7E-71.316908&lvl=16.4" target='_blank'><b>Address:</b>&nbsp; 17 Beacon hill rd, 03038.</a>
            </div>

            <div className="f-top-2">
                <div className="company">Company</div>
                <ul>
                    <li className={home}><a href="#" onClick={()=>{navigate("/")}}>Home</a></li>
                    <li className={about}><a href="#" onClick={()=>{navigate("/about")}}>About us</a></li>
                    <li className={home} onClick={()=>{navigate("/")}}><a href="#services">Our services</a></li>
                    <li className={home} onClick={()=>{navigate("/")}}><a href="#portfolio">Portfolio</a></li>
                    <li className={contact}><a href="#" onClick={()=>{navigate("/contact")}}>Contact us</a></li>
                </ul>
            </div>

            <div className="f-top-3">
                <div className="social-media">Social Media</div>
                <div className="sm-app">
                    <a href="https://www.instagram.com/_networkconstructionllc_" target='_blank'><FontAwesomeIcon className='med-app' icon={faInstagram} /></a>
                    <a href="https://web.facebook.com/profile.php?id=61561524758658" target='_blank'><FontAwesomeIcon className='med-app' icon={faFacebookF} /></a>
                </div>
            </div>

            <p className="copyright">&copy;{new Date().getFullYear()} All Rights Reserved By Network Construction LLC.</p>
        </div>
    )
}

export default Footer;