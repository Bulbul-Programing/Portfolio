
import '../../Home/WhyHireMe/WhyHireMe.css'
import AnimatedCursor from "react-animated-cursor";
const About = () => {
    return (
        <div>
            <AnimatedCursor
                innerSize={10}
                outerSize={35}
                color='0, 128, 254'
                outerAlpha={0.0}
                innerScale={0.7}
                outerScale={1}
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link'
                ]}
                outerStyle={{
                    border: '3px solid rgba(0, 128, 254, 0.6)'
                }}
            />
            <h1 className="text-3xl font-bold text-center">About Me</h1>
            {/* <div className="flex flex-col gap-y-10 md:flex-row lg:flex-row mx-10 md:mx-10 lg:mx-20 md:my-10 lg:my-20">
                <div className="md:w-2/4 lg:w-2/6">
                    <img className=" md:w-[300px] lg:w-[300px] rounded-2xl" src="https://i.ibb.co/dKh4TN2/getimg-ai-2023-12-11-T18-39-27-995-Z.png" alt="" />
                </div> 
                <div className="md:w-4/6 lg:w-2/4 lg:my-10">
                    <Tabs>
                        <TabList className='flex gap-x-6 text-lg font-semibold my-5'>
                            <Tab>My Self</Tab>
                            <Tab>Education</Tab>
                            <Tab>Skills</Tab>
                        </TabList>

                        <TabPanel>
                            <h2 className="text-slate-600">I am a dedicated junior MERN stack developer with a passion for continuous learning and a comprehensive skill set in MongoDB, Express.js, React, and Node.js. As a collaborative team player, I bring a problem-solving mindset and a commitment to code quality, poised to add significant value to your development projects.</h2>
                        </TabPanel>
                        <TabPanel>
                            <div className="flex gap-x-7 items-center justify-between shadow-lg my-5 p-5 rounded-lg">
                                <p className="w-[120px]">2021- Running</p>
                                <div>
                                    <h1 className="font-bold">Honors in Finance</h1>
                                    <h1 className="">National University</h1>
                                </div>
                                <img className="w-[50px] h-[60px]" src="https://i.ibb.co/sbV53z8/national-university-of-bangladesh-logo-105-B0-CD1-FD-seeklogo-com.png" alt="" />
                            </div>
                            <div className="flex gap-x-7 items-center justify-between shadow-lg my-5 p-5 rounded-lg">
                                <p className="w-[120px]">2018-2022</p>
                                <div>
                                    <h1 className="font-bold">HSC</h1>
                                    <h1 className="">Duaria AG Model Academy</h1>
                                </div>
                                <img className="w-[50px] h-[60px]" src="https://i.ibb.co/gjTHHGf/Board-of-Intermediate-and-Secondary-Education-Dhaka-Monogram-svg.png" alt="" />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="flex items-center gap-x-6">
                                <div>
                                    <h1 className="font-bold mb-1">HTML</h1>
                                    <h1 className="font-bold mb-1">CSS</h1>
                                    <h1 className="font-bold mb-1">Tailwind</h1>
                                    <h1 className="font-bold mb-1">Firebase</h1>
                                    <h1 className="font-bold mb-1">React</h1>
                                    <h1 className="font-bold mb-1">Express js</h1>
                                    <h1 className="font-bold mb-1">MongoDB</h1>
                                    <h1 className="font-bold mb-1">Node js</h1>
                                </div>
                                <div className="flex flex-col gap-y-3">
                                    <progress className="progress mb-1 progress-info h-3 w-56" value="90" max="100"></progress>
                                    <progress className="progress mb-1 progress-info h-3 w-56" value="85" max="100"></progress>
                                    <progress className="progress mb-1 progress-info h-3 w-56" value="82" max="100"></progress>
                                    <progress className="progress mb-1 progress-info h-3 w-56" value="80" max="100"></progress>
                                    <progress className="progress mb-1 progress-info h-3 w-56" value="85" max="100"></progress>
                                    <progress className="progress mb-1 progress-info h-3 w-56" value="70" max="100"></progress>
                                    <progress className="progress mb-1 progress-info h-3 w-56" value="65" max="100"></progress>
                                    <progress className="progress mb-1 progress-info h-3 w-56" value="50" max="100"></progress>
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div> */}
            <div className=" w-full md:w-3/4 lg:w-2/ p-5 mx-auto my-10">
                <h2 className="text-slate-600 ">I am a dedicated junior MERN stack developer with a passion for continuous learning and a comprehensive skill set in MongoDB, Express.js, React, and Node.js. As a collaborative team player, I bring a problem-solving mindset and a commitment to code quality, poised to add significant value to your development projects.</h2>
                <h1 className="text-lg font-bold my-5">My Education</h1>
                <div className="flex gap-x-7 items-center justify-between shadow-lg my-5 p-5 rounded-lg">
                    <p className="w-[120px]">2021- Running</p>
                    <div>
                        <h1 className="font-bold">Honors in Finance</h1>
                        <h1 className="">National University</h1>
                    </div>
                    <img className="w-[50px] h-[60px]" src="https://i.ibb.co/sbV53z8/national-university-of-bangladesh-logo-105-B0-CD1-FD-seeklogo-com.png" alt="" />
                </div>
                <div className="flex gap-x-7 items-center justify-between shadow-lg my-5 p-5 rounded-lg">
                    <p className="w-[120px]">2018-2022</p>
                    <div>
                        <h1 className="font-bold">HSC</h1>
                        <h1 className="">Duaria AG Model Academy</h1>
                    </div>
                    <img className="w-[50px] h-[60px]" src="https://i.ibb.co/gjTHHGf/Board-of-Intermediate-and-Secondary-Education-Dhaka-Monogram-svg.png" alt="" />
                </div>
                <h1 className="text-lg font-bold my-5">My Skills</h1>
                <div className="flex items-center gap-x-6">
                    <div>
                        <h1 className="font-bold mb-1">HTML</h1>
                        <h1 className="font-bold mb-1">CSS</h1>
                        <h1 className="font-bold mb-1">Tailwind</h1>
                        <h1 className="font-bold mb-1">Firebase</h1>
                        <h1 className="font-bold mb-1">React</h1>
                        <h1 className="font-bold mb-1">Express js</h1>
                        <h1 className="font-bold mb-1">MongoDB</h1>
                        <h1 className="font-bold mb-1">Node js</h1>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <progress className="progress mb-1 progress-info h-3 w-56" value="90" max="100"></progress>
                        <progress className="progress mb-1 progress-info h-3 w-56" value="85" max="100"></progress>
                        <progress className="progress mb-1 progress-info h-3 w-56" value="82" max="100"></progress>
                        <progress className="progress mb-1 progress-info h-3 w-56" value="80" max="100"></progress>
                        <progress className="progress mb-1 progress-info h-3 w-56" value="85" max="100"></progress>
                        <progress className="progress mb-1 progress-info h-3 w-56" value="70" max="100"></progress>
                        <progress className="progress mb-1 progress-info h-3 w-56" value="65" max="100"></progress>
                        <progress className="progress mb-1 progress-info h-3 w-56" value="50" max="100"></progress>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;