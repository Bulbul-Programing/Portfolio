
import Marquee from "react-fast-marquee";

const Skills = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">My <span className="text-blue-400">Skills</span></h1>
            <Marquee>
                <div className="flex items-center gap-x-6 my-10">
                    <img className="w-[100px] h-[100px]" src="https://i.ibb.co/k2m3bSJ/html-5.png" alt="" />
                    <img className="w-[100px] h-[100px]" src="https://i.ibb.co/3yyhPXz/css-3.png" alt="" />
                    <img className="w-[100px] h-[70px]" src="https://i.ibb.co/ykpFrJg/Tailwind-CSS-Logo-svg.png" alt="" />
                    <img className="w-[100px] h-[100px]" src="https://i.ibb.co/FDFK4yk/pngegg.png" alt="" />
                    <img className="w-[100px] h-[100px]" src="https://i.ibb.co/7VtgLTP/science.png" alt="" />
                    <img className="w-[100px] h-[100px]" src="https://i.ibb.co/ZMCBntR/pngwing-com.png" alt="" />
                    <img className="w-[100px] h-[50px]" src="https://i.ibb.co/2St4WWL/pngegg-1.png" alt="" />
                    <img className="w-[100px] h-[60px]" src="https://i.ibb.co/2vTjwZW/pngwing-com-2.png" alt="" />
                    <img className="w-[100px] h-[100px]" src="https://i.ibb.co/FB60fnQ/pngwing-com-3.png" alt="" />
                </div>
            </Marquee>
        </div>
    );
};
export default Skills;