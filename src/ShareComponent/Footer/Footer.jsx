import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <aside>
                <img className="w-[100px]" src="https://i.ibb.co/Sf6HC9X/24711982-6995929-ai.png" alt="" />
                <p className="text-xl font-bold">MD. BULBUL AHAMMED RIAD</p>
            </aside>
            <nav>
                <header className="footer-title">Social</header>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.linkedin.com/in/bulbul-ahammed-riad"><FaLinkedinIn className="text-3xl"></FaLinkedinIn></a>
                    <a href="https://www.facebook.com/bulbulahamed.riyad"><FaFacebookF className="text-3xl"></FaFacebookF></a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;