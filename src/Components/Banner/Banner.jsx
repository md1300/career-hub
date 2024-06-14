

const Banner = () => {
    return (
        <div className="flex justify-between items-center ">
            <div className="p-8 m-8 ">
                <h1 className="text-2xl ">One Step Closer To You <span className="text-red-400">Dream Jobs</span></h1>
                <p>Explore thousand of job oppertunites with all the information you need</p>
                <button className="btn btn-primary">get start</button>
            </div>
            <div><img src='user.png' alt=""  /></div>
        </div>
    );
};

export default Banner;