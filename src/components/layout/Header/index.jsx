import { useState } from "react";
import { FaPhoneAlt, FaChevronDown } from "react-icons/fa";
import { lists } from "../../../constant/lists";
import logo from "../../../assets/images/logo.png";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-[16px] flex items-center  justify-between">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-1">
          <img
            alt="7 States Pest Control Logo"
            src={logo}
            className="object-contain w-[56px] aspect-square transition-transform duration-500 ease-in-out animate-fade-in hover:scale-105 hover:brightness-110"
          />
          <h1 className="text-2xl font-bold typewriter-clean transition-transform duration-500 ease-in-out animate-fade-in hover:scale-105 hover:brightness-110">
            <span className="text-[#00b2ff]">Pest</span>
            <span className="text-gray-900">Control</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="hidden md:flex items-center space-x-8">
            {lists.navlinks.map((link, idx) =>
              link.dropdown ? (
                <div key={idx} className="relative group">
                  {/* Trigger */}
                  <div className="flex items-center space-x-1 cursor-pointer group relative">
                    <span
                      className="font-medium text-[#374151] group-hover:text-[#00b2ff] 
    after:content-[''] after:absolute after:left-0 after:-bottom-1 
    after:h-[2px] after:w-full after:bg-[#00b2ff] 
    after:scale-x-0 group-hover:after:scale-x-100 
    after:transition-transform after:duration-300 after:origin-center"
                    >
                      {link.name}
                    </span>
                    <FaChevronDown className="text-xs mt-1 text-[#374151] group-hover:text-[#00b2ff]" />
                  </div>

                  {/* Dropdown */}
                  {link.dropdown && (
                    <div className="absolute top-full left-0 mt-2 w-52 bg-white border border-gray-200 rounded-md shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {link.dropdown.map((item, i) => (
                        <a
                          key={i}
                          href={item.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-[#00b2ff] transition"
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
                    className={`relative font-medium 
    ${
      link.name === "Home"
        ? "text-[#00b2ff] after:scale-x-100"
        : "text-[#374151] hover:text-[#00b2ff] hover:after:scale-x-100"
    } 
    after:content-[''] after:absolute after:left-0 after:-bottom-1 
    after:h-[2px] after:w-full after:bg-[#00b2ff] 
    after:transform after:scale-x-0 after:transition-transform after:duration-300
    `}
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
          className="relative bg-[#00B2FF] text-white px-3 py-2 sm:px-6 sm:py-3 rounded-md 
           flex items-center justify-center space-x-2 overflow-hidden transition-all duration-300 
           hover:bg-gray-100 hover:text-sky-500 double-shimmer w-auto"
        >
          <div className="relative z-10 flex items-center space-x-2 text-sm sm:text-base font-medium">
            <FaPhoneAlt className="w-5 h-5 transition-colors duration-300" />

            {/* Hide text on small devices, show on sm+ */}
            <span className="hidden sm:inline whitespace-nowrap">
              +61 434 660 060
            </span>
          </div>
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#374151]"
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
                  link.name === "Home" ? "text-[#00b2ff]" : "text-[#374151]"
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
