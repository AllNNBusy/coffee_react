import { NavLink } from 'react-router-dom';

import './nav.scss';

const Nav = ({type}) => {

    let activeClass = null;
    let styles = null
    switch(type) {
        case 'header':
            styles = 'nav__header'
            activeClass = ( isActive ) => isActive ? "nav__item active__header" : "nav__item"
            break;
        case 'footer':
            styles = 'footer__nav'
            activeClass = ( isActive ) => isActive ? "nav__item active__footer" : "nav__item"
            break;
        default:
            break;
    }

    return (
        <nav className={styles}>
            <li className="nav__wrapper">
                <NavLink className={({isActive}) => activeClass(isActive)} to="/" alt="link" >Coffee house</NavLink>
                <NavLink className={({isActive}) => activeClass(isActive)} to="/about" alt="link" >Our coffee</NavLink>
                <NavLink className={({isActive}) => activeClass(isActive)} to="/goodscoffe" alt="link" >For your pleasure</NavLink>
            </li>
        </nav>
    );
};

export default Nav;