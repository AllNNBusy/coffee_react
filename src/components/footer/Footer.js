import Nav from "../nav/Nav";
import { ReactComponent as CoffeeWhite } from '../../img/logo/coffee-white.svg';

import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <Nav type="footer"/>
            <div className="footer__divider">
                <CoffeeWhite/>
            </div>
        </footer>
    );
};

export default Footer;