import { User, Mail, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <section
      id="Contact"
      className="py-10 px-5 sm:px-8 md:px-16 lg:px-20"
    >
      <form>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-10">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* LEFT SIDE */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <p className="text-[#C7D6DF] text-sm sm:text-base">
              Have a project in mind or just want to say hi? Send me a message.
            </p>

            <input
              type="text"
              placeholder="Name"
              className="w-full py-4 px-6 rounded-full text-black text-sm focus:outline-none"
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full py-4 px-6 rounded-full text-black text-sm focus:outline-none"
              required
            />

            <textarea
              placeholder="Message"
              className="w-full py-3 px-6 h-24 rounded-xl text-black text-sm resize-none focus:outline-none"
              required
            ></textarea>

            <button className="bg-[#1FA2C6] px-8 py-3 rounded-full text-sm font-light w-fit">
              Send Message
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full md:w-1/2 border border-white/40 rounded-xl p-6 flex flex-col gap-4">
            <h3 className="text-center font-semibold text-xl">
              Get in Touch
            </h3>

            <div className="flex items-center bg-white/5 py-3 px-6 rounded-lg gap-4">
              <User size={20} className="text-[#1FA2C6]" />
              <span className="text-[#C7D6DF] text-sm sm:text-base">
                akto
              </span>
            </div>

            <div className="flex items-center bg-white/5 py-3 px-6 rounded-lg gap-4">
              <Mail size={20} className="text-[#1FA2C6]" />
              <span className="text-[#C7D6DF] text-sm sm:text-base">
                aktoabraham@gmail.com
              </span>
            </div>

            <div className="flex items-center bg-white/5 py-3 px-6 rounded-lg gap-4">
              <Phone size={20} className="text-[#1FA2C6]" />
              <span className="text-[#C7D6DF] text-sm sm:text-base">
                +2348169506808
              </span>
            </div>

            <div className="flex gap-6 pt-4 justify-start">
              <FaFacebook size={20} />
              <FaInstagram size={20} />
              <FaTiktok size={20} />
              <FaXTwitter size={20} />
            </div>
          </div>

        </div>
      </form>
    </section>
  );
}
