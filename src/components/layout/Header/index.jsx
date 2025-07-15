import { useState } from "react";
import { FaPhoneAlt, FaChevronDown } from "react-icons/fa";
import { lists } from "../../../constant/lists";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-[16px] flex items-center  justify-between">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <img
            alt="7 States Pest Control Logo"
            src="https://7statespestcontrol.com.au/wp-content/uploads/2022/06/7-states-logo-1.png.webp"
            width="160"
            height="56"
            className="object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="hidden md:flex items-center space-x-8">
            {lists.navlinks.map((link, idx) =>
              link.dropdown ? (
                <div key={idx} className="relative group">
                  {/* Trigger */}
                  <div className="flex items-center space-x-1 cursor-pointer">
                    <span className="font-medium text-[#374151] group-hover:text-blue-600">
                      {link.name}
                    </span>
                    <FaChevronDown className="text-xs mt-1 text-[#374151] group-hover:text-blue-600" />
                  </div>

                  {/* Dropdown */}
                  {link.dropdown && (
                    <div className="absolute top-full left-0 mt-2 w-52 bg-white border border-gray-200 rounded-md shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {link.dropdown.map((item, i) => (
                        <a
                          key={i}
                          href={item.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div key={idx}>
                  <a
                    href={link.href}
                    className={`${
                      link.name === "Home"
                        ? "text-blue-600"
                        : "text-[#374151] hover:text-blue-600"
                    } font-medium`}
                  >
                    {link.name}
                  </a>
                </div>
              )
            )}
          </div>
        </nav>

        {/* Call Button */}
        <a
          href="tel:+61434660060"
          className="bg-orange-500 text-white hover:text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-orange-600"
        >
          <FaPhoneAlt className="w-4 h-4" />
          <span>+61 434 660 060</span>
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#374151] ml-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 border-t">
          {lists.navlinks.map((link, idx) =>
            link.dropdown ? (
              <div key={idx} className="py-2">
                <span className="block text-[#374151]">{link.name}</span>
                <div className="pl-4">
                  {link.dropdown.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      className="block py-1 text-gray-600"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={idx}
                href={link.href}
                className={`block py-2 ${
                  link.name === "Home" ? "text-blue-600" : "text-[#374151]"
                }`}
              >
                {link.name}
              </a>
            )
          )}
        </div>
      )}
    </header>
  );
};
