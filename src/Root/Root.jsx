import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import Catagory from "../Components/Catagory-List/Catagory";
import JobsCatagory from "../Components/JobsCatagory/JobsCatagory";
import FeatureJobs from "../Components/FeatureJobs/FeatureJobs";
import JobsFeature from "../Components/JobsFeature/JobsFeature";


const Root = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>

            <Outlet></Outlet>

            <Catagory></Catagory>
            <JobsCatagory></JobsCatagory>
            <FeatureJobs></FeatureJobs>
            <JobsFeature></JobsFeature>
            <Footer></Footer>
        </div>
    );
};

export default Root;