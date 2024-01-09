// Navbar.js
import React from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Your Navbar Branding */}
              <div className="flex-shrink-0">{/* Your Logo or Branding */}</div>

              {/* Mobile Menu Button */}
              <div className="flex items-center lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring focus:ring-inset focus:ring-white">
                  {open ? (
                    <XIcon className="h-6 w-6" />
                  ) : (
                    <MenuIcon className="h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex space-x-4">
                {/* Your Navigation Links */}
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Your Mobile Navigation Links */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
