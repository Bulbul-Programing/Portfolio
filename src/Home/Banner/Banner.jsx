import './banner.css'
import { FaDownload } from "react-icons/fa";
import Portfolio from '../../../public/Portfolio.pdf'

const Banner = () => {
    return (
        <div className={`mx-5 md:mx-10 lg:mx-20 my-10 flex flex-col-reverse md:flex-row lg:flex-row items-center`}>
            <div className='md:w-3/4 lg:w-4/6'>
                <h1 className="text-2xl md:text-3xl lg:text-5xl my-3 lg:my-5 shineEffect text-black font-bold uppercase">HI, i aM Bulbul ahammed!</h1>
                <h1 className='font-bold my-3 text-lg hover:text-blue-500 hover:duration-150'>Junior MERN Stack Developer</h1>
                <p className='w-3/4 text-slate-600'>Eager learner and MERN stack practitioner, dedicated to honing skills in MongoDB, Express.js, React, and Node.js, with a focus on building robust and user-friendly web applications.</p>
                <div>
                    <a href={Portfolio} download='Portfolio.pdf' rel="noreferrer" target={'_blank'}>
                        <button className='btn bg-blue-400 text-white hover:text-black font-medium my-5'>DownLoad Cv <FaDownload></FaDownload></button>
                    </a>
                </div>
            </div>
            <div className='md:w-2/4 lg:w-2/6'>
                <img className='w-[400px]  mask mask-hexagon' src="https://i.ibb.co/F7JsVmS/New-Project-5.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;