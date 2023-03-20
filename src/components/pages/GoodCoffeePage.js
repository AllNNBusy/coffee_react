import { Helmet } from "react-helmet";

import GoodCoffeHeader from "../appGoodCoffee/goodCoffeHeader/GoodCoffeHeader";
import GoodCoffeeAbout from "../appGoodCoffee/goodCoffeeAbout/GoodCoffeeAbout";
import ProductCards from "../productCards/ProductCards";

const GoodCoffeePage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="For your pleasure"
                    />
                <title>For your pleasure</title>
            </Helmet>
            <GoodCoffeHeader/>
            <GoodCoffeeAbout/>
            <ProductCards/>
        </>
    )
}

export default GoodCoffeePage;