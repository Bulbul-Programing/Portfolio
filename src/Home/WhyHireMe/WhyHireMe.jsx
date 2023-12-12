import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import './whyHireMe.css'

const WhyHireMe = () => {
    return (
        <div className="flex flex-col gap-y-10 md:flex-row lg:flex-row mx-10 md:mx-10 lg:mx-20 md:my-10 lg:my-20">
            <div className="md:w-2/4 lg:w-2/4">
                <img className=" md:w-[300px] lg:w-[400px] md:mt-24 lg:mt-0 rounded-2xl" src="https://i.ibb.co/dKh4TN2/getimg-ai-2023-12-11-T18-39-27-995-Z.png" alt="" />
            </div>
            <div className="md:w-2/4 lg:w-2/4 lg:my-10">
                <p className="text-blue-400 font-medium">About me</p>
                <div>
                    <h1 className="text-5xl font-bold md:leading-[60px] lg:leading-[80px]">Why you <span className="text-blue-400">hire me</span> for your <span className="text-blue-400">next project?</span></h1>
                </div>
                <div>
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
                                    <progress className="progress mb-1 progress-info h-3 w-56" value="78" max="100"></progress>
                                    <progress className="progress mb-1 progress-info h-3 w-56" value="65" max="100"></progress>
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
                <button className="font-bold my-5 btn text-white bg-blue-400 hover:text-black">Hire me</button>
            </div>
        </div>
    );
};

export default WhyHireMe;