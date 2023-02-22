import NavItem from '../nav-item/nav-item';

import './nav-wrapper.scss';

const NavWrapper = ({nav, activeClass, hideCardItem}) => {

  const items = nav.map(item => {
    const {id, ...itemProps} = item;
    return (
      <NavItem
        hideCardItem={hideCardItem}
        key={id}
        {...itemProps}
        activeClass={(e) => activeClass(e, id)}/>
    )
  })

  return (
    <li className="nav__wrapper">
      {items}
    </li>
  );
}

export default NavWrapper;