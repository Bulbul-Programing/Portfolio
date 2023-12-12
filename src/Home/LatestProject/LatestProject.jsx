import { NavLink } from "react-router-dom";

const LatestProject = () => {
    return (
        <div className="mx-10 md:mx-10 lg:mx-20">
            <div>
                <h1 className="text-3xl font-bold text-center my-5 md:my-10 lg:my-20">My latest <span className="text-blue-500">Projects</span></h1>
            </div>
            <div>
                <div className="flex flex-col mb-7 md:flex-row lg:flex-row items-center md:gap-x-4 lg:gap-x-10 shadow-xl p-5 md:p-4 lg:p-7 rounded-lg">
                    <img className="md:w-[200px] lg:w-[300px] rounded-lg" src="https://i.ibb.co/bbGbJFC/trub-trade.png" alt="" />
                    <div>
                        <h1 className="text-3xl font-bold my-5 md:my-0 lg:my-0">Turbo Trade</h1>
                        <p className="text-slate-500 my-3 lg:w-3/4">TurboTrade: Your go-to online hub for buying and selling cars. Experience a sleek platform, connecting car enthusiasts for seamless transactions. Drive your passion with TurboTrade.</p>
                    </div>
                    <NavLink to='https://turbotrade-753dc.web.app/'><button className="font-bold my-5 btn text-white bg-blue-400 hover:text-black">Explore</button></NavLink>
                </div>
                <div className="flex flex-col mb-7 md:flex-row lg:flex-row items-center md:gap-x-4 lg:gap-x-10 shadow-xl p-5 md:p-4 lg:p-7 rounded-lg">
                    <img className="md:w-[200px] lg:w-[300px] rounded-lg" src="https://i.ibb.co/qB7m9GD/career-vista.png" alt="" />
                    <div>
                        <h1 className="text-3xl font-bold my-5 md:my-0 lg:my-0">Career Vista</h1>
                        <p className="text-slate-500 my-3 lg:w-3/4">TurboTrade: Your go-to online hub for buying and selling cars. Experience a sleek platform, connecting car enthusiasts for seamless transactions. Drive your passion with TurboTrade.</p>
                    </div>
                    <NavLink to='https://turbotrade-753dc.web.app/'><button className="font-bold my-5 btn text-white bg-blue-400 hover:text-black">Explore</button></NavLink>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row items-center md:gap-x-4 lg:gap-x-10 shadow-xl p-5 md:p-4 lg:p-7 rounded-lg">
                    <img className="md:w-[200px] lg:w-[300px] rounded-lg" src="https://i.ibb.co/bP5k4zF/survey-pluse.png" alt="" />
                    <div>
                        <h1 className="text-3xl font-bold my-5 md:my-0 lg:my-0">Survey Pluse</h1>
                        <p className="text-slate-500 my-3 lg:w-3/4">TurboTrade: Your go-to online hub for buying and selling cars. Experience a sleek platform, connecting car enthusiasts for seamless transactions. Drive your passion with TurboTrade.</p>
                    </div>
                    <NavLink to='https://turbotrade-753dc.web.app/'><button className="font-bold my-5 btn text-white bg-blue-400 hover:text-black">Explore</button></NavLink>
                </div>
            </div>
        </div>
    );
};
// https://i.ibb.co/qB7m9GD/career-vista.png
// https://i.ibb.co/bP5k4zF/survey-pluse.png
// https://i.ibb.co/bbGbJFC/trub-trade.png

export default LatestProject;