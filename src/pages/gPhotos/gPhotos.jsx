import Footer from "../../components/footer/footer";
import Gallery from "../../components/gallery/gallery";
import Header from "../../components/header/header";

function GPhotos() {
    return (
        <div className="g-photos">
            <Header portfolio='active' />
            <Gallery />
            <Footer />
        </div>
    )
};

export default GPhotos;