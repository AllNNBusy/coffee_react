import { ReactComponent as CoffeeWhite } from '../../../img/logo/coffee-white.svg';

import './mainAbout.scss';

const MainAbout = () => {
    return (
        <section className="main__about">
            <div className="container">
                <h2 className="main__about__title fz_24">About Us</h2>
                <div className="main__about__divider">
                    <CoffeeWhite/>
                </div>
                <p className="main__about__descr fz_14">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                Afraid at highly months do things on at. Situation recommend objection do intention
                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.</p>
                <p className="main__about__subdescr fz_14">Now residence dashwoods she excellent you. Shade being under his bed her, Much
                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                horrible but confined day end marriage. Eagerness furniture set preserved far
                recommend. Did even but nor are most gave hope. Secure active living depend son
                repair day ladies now.</p>
            </div>
        </section>
    )
}

export default MainAbout;