import { useRef } from "react";
import AnimatedCursor from "react-animated-cursor";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6hahuq8', 'template_sgvck6d', form.current, 'SG5_1KuVXRXh5-Gh4')
            .then((result) => {
                if(result.text === 'OK'){
                    toast.success('Thanks for send Massage.')
                    e.target.reset()
                }
            }, (error) => {
                console.log(error.text);
            });
    };

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
            /><ToastContainer />

            <h1 className="text-3xl font-bold text-center my-10">Contact Me</h1>
            <div className="p-5 md:w-3/4 lg:w-2/4 my-10 mx-auto">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="flex flex-col md:flex-row lg:flex-row gap-y-4 gap-x-4 mb-4">
                        <input className="p-3 w-full md:w-1/2 lg:w-1/2 outline-none border focus:border-blue-400 rounded-md" placeholder="Name" type="text" name="user_name" />
                        <input className="p-3 w-full md:w-1/2 lg:w-1/2 outline-none border focus:border-blue-400 rounded-md" placeholder="Email" type="email" name="user_email" />
                    </div>
                    <textarea rows='3' className="p-3 w-full outline-none border focus:border-blue-400 rounded-md" placeholder="Massage" name="message" />
                    <input className="w-full bg-blue-400 p-4 my-4 rounded-lg text-white font-bold" type="submit" value="Send" />
                </form>
                {/* <div className="flex gap-x-4 my-4">
                    <input className="p-3 w-1/2 outline-none border focus:border-blue-400 rounded-md" type="text" placeholder="Name" />
                    <input className="p-3 w-1/2 outline-none border focus:border-blue-400 rounded-md" type="email" placeholder="Email" />
                </div>
                <textarea cols="30" rows="3" placeholder="Massage" className="p-3 w-full outline-none border focus:border-blue-400 rounded-md"></textarea>
                <a href="mailto:abc.bulblul@gmail.com?subject='Hello from Abstract!'&body='Just popped in to say hello'">Click to Send an Email</a> */}
            </div>
        </div>
    );
};

export default ContactMe;