import Catagory from "../Catagory-List/Catagory";
import FeatureJobs from "../FeatureJobs/FeatureJobs";
import JobsCatagory from "../JobsCatagory/JobsCatagory";
import JobsFeature from "../JobsFeature/JobsFeature";


const Home = () => {
    return (
        <div className="text-2xl text-center">
            
            <Catagory></Catagory>
            <JobsCatagory></JobsCatagory>
            <FeatureJobs></FeatureJobs>
            <JobsFeature></JobsFeature>


        </div>
    );
};

export default Home;