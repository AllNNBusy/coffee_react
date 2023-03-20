import girlWithCoffee from '../../../img/our-coffe-img/img/our-coffe-photo.png';
import { ReactComponent as CoffeeWhite } from '../../../img/logo/coffee-white.svg';

import './ourCoffeeAbout.scss';

const OurCoffeeAbout = () => {
    return (
        <section className="ourCoffee__about">
            <div className="container">
                <div className="ourCoffee__about__wrapper">
                    <img src={girlWithCoffee} alt="girl with coffee mug" />
                    <div className="ourCoffee__about__items">
                        <h2 className="ourCoffee__about__subtitle fz_24">About our beans</h2>
                        <div className="ourCoffee__about__divider">
                            <CoffeeWhite />
                        </div>
                        <p className="fz_14">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                        <p className="fz_14">Afraid at highly months do things on at. Situation recommend objection do intention <br />
                        so questions.<br />
                        As greatly removed calling pleased improve an.<br /> Last ask him cold feel<br />
                        met spot shy want. Children me laughing we<br /> prospect answered followed. At it went<br />
                        is song that held help face.</p>
                    </div>
                </div>
                <div className="ourCoffee__about__delimiter"></div>
            </div>
        </section>
    )
}

export default OurCoffeeAbout;