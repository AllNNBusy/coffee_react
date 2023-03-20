import { Helmet } from "react-helmet";

import OurCoffeeHeader from "../appOurCoffee/ourCoffeeHeader/OurCoffeeHeader";
import OurCoffeeAbout from "../appOurCoffee/ourCoffeeAbout/OurCoffeeAbout";
import Searchbar from "../appOurCoffee/Searchbar/Searchbar";
import ProductCards from "../productCards/ProductCards";

const OurCoffeePage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Our Coffee"
                    />
                <title>Our Coffee</title>
            </Helmet>
            <OurCoffeeHeader/>
            <OurCoffeeAbout/>
            <Searchbar/>
            <ProductCards/>
        </>
    )
}

export default OurCoffeePage;