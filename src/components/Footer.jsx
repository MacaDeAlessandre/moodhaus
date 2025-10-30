import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTikTok } from "react-icons/ai";
import '../css/footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer-text">Nuestras redes:</p>
            <div className="footer-icons">
                <GrInstagram className="icon"/>
                <FaFacebookF className="icon"/>
                <AiOutlineTikTok className="icon"/>
            </div>
        </footer>
    )
};

export default Footer;