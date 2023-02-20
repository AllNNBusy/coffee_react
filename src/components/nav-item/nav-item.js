import './nav-item.scss';

const NavItem = (itemProps) => {
  const {name, activ, href, activeClass} = itemProps;

  let classNames = activ ? 'activ' : null;

  return (
    <ul className="nav__item"><a onClick={(e) => activeClass(e)} className={classNames} href={href}>{name}</a></ul>
  )
}

export default NavItem;