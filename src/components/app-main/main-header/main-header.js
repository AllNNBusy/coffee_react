import DividerWhite from '../../divider_white/divider_white';

import './main-header.scss';

const MainHeader = () => {
  return (
    <header className="main_header">
      <div className="container">
        <h1 className="main_header__title fz_40">Everything You Love About Coffee</h1>
        <DividerWhite/>
        <h2 className="main_header__subtitle fz_24">We makes every day full of energy and taste</h2>
        <h2 className="main_header__descr fz_24">Want to try our beans?</h2>
        <button className="main_header__btn fz_14" type="button">More</button>
      </div>
    </header>
  );
}

export default MainHeader;