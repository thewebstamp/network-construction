import './gallery.css';
import { Images } from '../../assets/images.js';
import { useState } from 'react';

function Gallery() {
    const gallery = [{
        img: Images.img25,
        view: Images.img25
    }, {
        img: Images.img24,
        view: Images.img24
    }, {
        img: Images.img23,
        view: Images.img23
    }, {
        img: Images.img22,
        view: Images.img22
    }, {
        img: Images.img21,
        view: Images.img21
    }, {
        img: Images.img20,
        view: Images.img20
    }, {
        img: Images.img19,
        view: Images.img19
    }, {
        img: Images.img18,
        view: Images.img18
    }, {
        img: Images.img17,
        view: Images.img17
    }, {
        img: Images.img16,
        view: Images.img16
    }, {
        img: Images.img15,
        view: Images.img15
    }, {
        img: Images.img14,
        view: Images.img14
    }, {
        img: Images.img13,
        view: Images.img13
    }, {
        img: Images.img12,
        view: Images.img12
    }, {
        img: Images.img11,
        view: Images.img11
    }, {
        img: Images.img10,
        view: Images.img10
    }, {
        img: Images.img9,
        view: Images.img9
    }, {
        img: Images.img8,
        view: Images.img8
    }, {
        img: Images.img7,
        view: Images.img7
    }, {
        img: Images.img6,
        view: Images.img6
    }, {
        img: Images.img5,
        view: Images.img5
    }, {
        img: Images.img4,
        view: Images.img4
    }, {
        img: Images.img3,
        view: Images.img3
    }, {
        img: Images.img2,
        view: Images.img2
    }, {
        img: Images.img1,
        view: Images.img1
    },];
    const [overviewImg, setOverviewImg] = useState(null);
    const [viewSwitch, setViewSwitch] = useState(false);

    document.addEventListener('click', (e) => {
        if (e.target.id != 'smallImg' && e.target.className != 'smallImg' && e.target.id != 'largeImg') {
            setViewSwitch(false);
        }
    });

    return (
        <div className="gallery-wrap">
            <h2>Network Construction LLC Photos</h2>
            {
                !viewSwitch &&
                <div id='smallImg' className="gallery-show">
                    {
                        gallery.map((image, i) => (
                            <img className='smallImg' name={image.view} key={i} src={image.img} alt="" onClick={(e) => {
                                setOverviewImg(e.target.name);
                                if (!viewSwitch) { setViewSwitch(true) }
                            }} />
                        ))
                    }
                </div>
            }
            {
                viewSwitch &&
                <div className="overview">
                    <p onClick={() => {
                        setOverviewImg(null);
                        if (viewSwitch) { setViewSwitch(false) }
                    }}><span>x</span> Close</p>
                    <img id='largeImg' src={overviewImg} alt="" />
                    <p><span>x</span> Close</p>
                </div>
            }
        </div>
    )
};

export default Gallery;