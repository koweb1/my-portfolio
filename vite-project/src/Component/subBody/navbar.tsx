export default function Navbar(){
    return(
        <div className="w-full ">
            <header className="flex w-full h-11 justify-between items-center px-[80px] pt-5 font-poppins">
                <div className="text-[28px] tracking-widest font-space font-semibold ">akto</div>
           

            <ul className="flex list-none gap-8 text-lg ">
                <li><a href="#Home" className="text-[#1FA2C6]">Home</a></li>
                <li><a href="#About" className="hover:text-[#1FA2C6] transiton duration-300 ease-in-out">About</a></li>
                <li><a href="#Skills" className="hover:text-[#1FA2C6] transiton duration-300 ease-in-out">Skills</a></li>
                <li><a href="#Services" className="hover:text-[#1FA2C6] transiton duration-300 ease-in-out">Services</a></li>
                <li><a href="" className="hover:text-[#1FA2C6] transiton duration-300 ease-in-out">Project</a></li>
                <li><a href="" className="hover:text-[#1FA2C6] transiton duration-300 ease-in-out">Contact</a></li>
            </ul>
            </header>

        </div>
    );
}