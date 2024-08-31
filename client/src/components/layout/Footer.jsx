import React from "react";
import CustomButton from "../customs/CustomButton";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { TfiEmail } from "react-icons/tfi";
import { IoCall } from "react-icons/io5";
import { ImLocation } from "react-icons/im";

const Footer = () => {
  return (
    <div className="w-full relative  bg-[#000000]">
      <div className="w-11/12 mx-auto p-5">

        <div className="flex flex-col">
          {/* first part */}
          <div className="flex justify-between">
            <h3 className="leading-[2.5rem] max-w-md font-Roboto text-white text-[2rem] font-bold ">
              Subscribe To Get The Latest Update
            </h3>
            <div className="flex w-[32rem] border-[3px] h-[3.82rem] border-red-700 rounded-xl">
              <input
                className="bg-transparent text-gray-300 focus:outline-none px-5 text-lg"
                type="email"
                placeholder="Enter Your Email "
              />
              <CustomButton
                className={"rounded-lg ml-[4.5rem] border-l-2 h-[3.5rem] w-[12rem]"}
                label={"SUBSCRIBE"}
              />
            </div>
          </div>

          {/* second part */}
          <div className="flex justify-between gap-10 mt-20">
            <div className="flex flex-col gap-3">
              <h3 className="text-[#DB4A2B] font-semibold text-2xl">UNARROW.</h3>
              <p className="text-white max-w-[12rem] font-Roboto">
                The best Digital Solution Agency in the Market.We are here to
                build your Dream website on the go..
              </p>

              {/* social-icons */}
              <div className="flex mt-4 gap-5 text-white text-3xl">
                <a href="">
                  <FaLinkedin />
                </a>
                <a href="">
                  <FaWhatsapp />
                </a>
                <a href="">
                  <FaSquareXTwitter />
                </a>
                <a href="">
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className="font-Roboto flex flex-col gap-2">
              <h3 className="flex text-white font-semibold text-xl"> ON OUR SITE</h3>
              <nav className="flex flex-col gap-2 text-lg justify-start text-white font-normal">
                <Link className="hover:text-[#DB4A2B] duration-300 transition-all" to={"/"}>Home</Link>
                <Link className="hover:text-[#DB4A2B] duration-300 transition-all" to={"/service"}>Services</Link>
                <Link className="hover:text-[#DB4A2B] duration-300 transition-all" to={"/aboutus"}>About Us</Link>
                <Link className="hover:text-[#DB4A2B] duration-300 transition-all" to={"/works"}>Works</Link>
              </nav>
            </div>

            <div className="font-Roboto flex flex-col gap-2">
              <h3 className="flex text-white font-semibold text-xl">RESOURCES</h3>
               <nav className="flex flex-col gap-2 text-lg justify-start text-white font-normal">
               <Link to={"/careers"}>Careers</Link>
               <Link to={"/blog"}>Blog</Link>
               </nav>
            </div>

            <div className="flex flex-col gap-2 font-Roboto">
              <h3 className="flex text-white font-semibold text-xl">CONTACT</h3>
              <div className="flex justify-center items-center gap-2 text-white text-lg">
                <TfiEmail/>
                <a href="mailto:tanulyadav@unarrow.com">tanulyadav@unarrow.com</a>
              </div>

              <div className="flex justify-start items-center gap-2 text-white text-lg">
                <IoCall/>
                <a href="tel:+91 8433700215">+91 8433700215</a>
              </div>

              <div className="flex justify-start items-center gap-2 text-white text-lg">
                <ImLocation/>
                <a href="">Mumbai ,Maharashtra</a>
              </div>
            </div>
          </div>
        </div>

      </div>
 
      {/* horizontal line */}
        <hr />
      {/* reservation of unarrow */}
      <div className="py-3 font-Roboto">
        <p className="text-white font-normal leading-normal text-lg text-center cursor-pointer ">2024@Unarrow.com</p> 
      </div>
    </div>
  );
};

export default Footer;
