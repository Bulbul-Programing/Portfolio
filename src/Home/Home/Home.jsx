import AnimatedCursor from "react-animated-cursor";
import Navbar from "../../ShareComponent/Navbar/Navbar";
import Banner from "../Banner/Banner";
import WhyHireMe from "../WhyHireMe/WhyHireMe";

const Home = () => {
    return (
        <div className=" pb-20">
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
            <Navbar></Navbar>
            <Banner></Banner>
            <WhyHireMe></WhyHireMe>
        </div>
    );
};

export default Home;