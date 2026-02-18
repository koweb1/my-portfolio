import Image from '../assets/animeright.png'
import imageFront from '../assets/animeFacingme.png'
import './about.css'
export default function About (){
    const titles = "About Me"


    return(
     <section id="About" className="bg-[#081F2E] h-auto px-[80px] pt-8">
        <h2 className='number-two text-[33px] font-poppins font-[600] mb-20 '>{titles}</h2>
        <div className="boss flex justify-center items-center  w-full ">
            <div className="image w-[50%] "><img src={Image}  className='hidden md:block h-[600px] object-contain mt-[-50px]' /> <img src={imageFront} className="h-[400px] object-contain md:hidden"/> </div>
            <div className="text w-[70%] h-[400px] mt-[50px]">
                <p className='about first pt-4 pb-4 text-[23px] '>Hi, I’m akto a Front-End Developer and AI Automation Engineer who enjoys building modern, responsive, and interactive web experiences.</p>
                <p className='about pt-4 pb-4 text-[23px] '>I specialize in creating clean user interfaces with React, Tailwind CSS, and modern JavaScript. I also design AI-powered workflows using tools like OpenAI and automation platforms to help businesses save time and work smarter.</p>
                <p className='about pt-4 pb-4 text-[23px]'>I’m passionate about learning, experimenting, and turning ideas into functional, beautiful products on the web.</p>
            </div>
        </div>
     </section>

    );
}