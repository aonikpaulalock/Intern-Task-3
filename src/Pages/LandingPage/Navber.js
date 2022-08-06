import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from "../../Asset/Header/LOGO.png"
import user from "../../Asset/Header/Ellipse 1.png"
import notification from "../../Asset/Header/Notification.svg"
import { Link } from 'react-router-dom';
const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="px-8 py-2 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center md:justify-around w-full">
              <div className="flex-shrink-0">
                <img
                  className="w-36 h-10"
                  src={logo}
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link to="" class="py-4 px-2 text-[#001858] font-medium text-base font-[Poppins]">Home</Link>
                  <Link to="" class="py-4 px-2 text-[#596EA8] font-normal text-base font-[Poppins]">Services</Link>
                  <Link to="" class="py-4 px-2 text-[#596EA8] font-normal text-base font-[Poppins]">About</Link>
                  <Link to="" class="py-4 px-2 text-[#596EA8] font-normal text-base font-[Poppins]">Contact Us</Link>
                </div>
              </div>
              <div class="hidden md:flex items-center space-x-5 ">
                <img src={notification} alt="" className="w-6 h-6" />
                <img src={user} alt="" className="w-10 h-10" />
              </div>
            </div>



            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="#"
                  className="text-[#001858]  font-[Poppins] block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </Link>

                <Link
                  to="#"
                  className="text-[#001858]  font-[Poppins] block px-3 py-2 rounded-md text-base font-medium"
                >
                  Team
                </Link>

                <Link
                  to="#"
                  className="text-[#001858]  font-[Poppins] block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </Link>

                <Link
                  to="#"
                  className="text-[#001858]  font-[Poppins] block px-3 py-2 rounded-md text-base font-medium"
                >
                  Calendar
                </Link>

                <Link
                  to="#"
                  className="text-[#001858]  font-[Poppins] block px-3 py-2 rounded-md text-base font-medium"
                >
                  Reports
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Navber;