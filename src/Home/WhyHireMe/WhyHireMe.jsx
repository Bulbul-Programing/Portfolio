import { Tab, TabList, TabPanel, Tabs } from "react-tabs";


const WhyHireMe = () => {
    return (
        <div className="flex mx-20 items-center">
            <div className="w-2/4">
                <img className="w-[400px] rounded-2xl" src="https://i.ibb.co/dKh4TN2/getimg-ai-2023-12-11-T18-39-27-995-Z.png" alt="" />
            </div>
            <div className="w-2/4">
                <p className="text-blue-400 font-medium">About me</p>
                <div>
                    <h1 className="text-5xl font-bold leading-[80px]">Why you <span className="text-blue-400">hire me</span> for your <span className="text-blue-400">next project?</span></h1>
                </div>
                <div>
                    <Tabs>
                        <TabList className='flex gap-x-6 text-lg font-semibold my-5'>
                            <Tab>My Self</Tab>
                            <Tab>Education</Tab>
                            <Tab>Skills</Tab>
                        </TabList>

                        <TabPanel>
                            <h2>I am a dedicated junior MERN stack developer with a passion for continuous learning and a comprehensive skill set in MongoDB, Express.js, React, and Node.js. As a collaborative team player, I bring a problem-solving mindset and a commitment to code quality, poised to add significant value to your development projects.</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>education</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Skills</h2>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default WhyHireMe;