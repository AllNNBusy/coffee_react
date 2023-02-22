import { Link } from 'react-router-dom';

import './nav-item.scss';

const NavItem = (props) => {
  const {name, activ, href, activeClass, hideCardItem} = props;

  let classNames = activ ? 'nav__item__activ' : null;

  return (
    <ul onClick={hideCardItem} className="nav__item">
        <Link onClick={(e) => activeClass(e)} className={classNames} to={href} alt={name}>{name}</Link>
    </ul>
  )
}

export default NavItem;