import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <div className="mb-4">
              <div className="flex items-center justify-center space-x-1">
                <img
                  alt="7 States Pest Control Logo"
                  src={logo}
                  className="object-contain w-[56px] aspect-square transition-transform duration-500 ease-in-out animate-fade-in hover:scale-105 hover:brightness-110"
                />
                <h1 className="text-2xl font-bold typewriter-clean transition-transform duration-500 ease-in-out animate-fade-in hover:scale-105 hover:brightness-110">
                  <span className="text-[#00b2ff]">Pest</span>
                  <span className="text-white">Control</span>
                </h1>
              </div>
            </div>
            <p className="text-gray-400">
              Melbourne's trusted pest control experts with over a decade of
              experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/termite-control" className="hover:text-white">
                  Termite Control
                </a>
              </li>
              <li>
                <a href="/contact-us" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="text-gray-400 space-y-2">
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-sm" />
                <a href="tel:+61434660060" className="hover:text-white">
                  +61 434 660 060
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-sm" />
                <a
                  href="mailto:7statespestcontrol@gmail.com"
                  className="hover:text-white"
                >
                  7statespestcontrol@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-sm" />
                13/200 Queen St, Melbourne VIC 3000
              </p>
            </div>
          </div>

          {/* Emergency Service */}
          <div>
            <h3 className="font-semibold mb-4">Emergency Service</h3>
            <p className="text-gray-400 mb-4">
              Available 24/7 for urgent pest control needs
            </p>
            <a href="tel:+61434660060">
              <button className=" bg-[#00B2FF] hover:bg-[#009cdc] text-white text-sm font-medium px-4 py-2 rounded-md">
                Emergency Call
              </button>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-gray-400">Follow us on:</span>
              <div className="flex space-x-4 text-gray-400">
                <a
                  href="https://www.facebook.com/people/7-States-Pest-Control/61556724444090/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/7statespestcontrol/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.youtube.com/@7StatePestControl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 7 States Pest Control. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
