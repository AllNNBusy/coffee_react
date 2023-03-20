import { ReactComponent as CoffeeWhite } from '../../../img/logo/coffee-white.svg';

import './mainHeader.scss';

const MainHeader = () => {
    return (
        <header className="main__header">
            <div className="container">
            <h1 className="main__header__title fz_40">Everything You Love About Coffee</h1>
            <div className="main__header__divider">
                <CoffeeWhite />
            </div>
            <h2 className="main__header__subtitle fz_24">We makes every day full of energy and taste</h2>
            <h2 className="main__header__descr fz_24">Want to try our beans?</h2>
            <button className="main__header__btn fz_14" type="button">More</button>
            </div>
        </header>
    )
}

export default MainHeader;