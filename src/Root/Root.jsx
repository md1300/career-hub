import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>

            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default Root;