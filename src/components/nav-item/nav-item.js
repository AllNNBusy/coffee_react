import { Link } from 'react-router-dom';

import './nav-item.scss';

const NavItem = (itemProps) => {
  const {name, activ, href, activeClass} = itemProps;

  let classNames = activ ? 'nav__item__activ' : null;

  return (
    <ul className="nav__item">
        <Link onClick={(e) => activeClass(e)} className={classNames} to={href}>{name}</Link>
    </ul>
  )
}

export default NavItem;