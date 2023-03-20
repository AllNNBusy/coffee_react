import { Helmet } from "react-helmet";

import MainHeader from "../appMain/mainHeader/MainHeader";
import MainAbout from "../appMain/mainAbout/MainAbout";
import MainProduct from "../appMain/mainProduct/MainProduct";

const MainPage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Coffee house"
                    />
                <title>Coffee house</title>
            </Helmet>
            <MainHeader/>
            <MainAbout/>
            <MainProduct/>
        </>
    )
}

export default MainPage;