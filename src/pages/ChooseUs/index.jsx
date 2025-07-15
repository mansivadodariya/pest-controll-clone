import React, { useEffect, useRef } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const areas = [
  "Melbourne CBD",
  "South Yarra",
  "Toorak",
  "Richmond",
  "Fitzroy",
  "Carlton",
  "St Kilda",
  "Brighton",
  "Hawthorn",
  "Camberwell",
  "Box Hill",
  "Glen Waverley",
  "Doncaster",
  "Balwyn",
  "Kew",
  "Malvern",
];

export default function AreasWeServe() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += 1;
        scrollContainer.scrollLeft += 1;

        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
          scrollAmount = 0;
        }
      }
    }, 20); // Adjust speed (lower = faster)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 ">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 -z-10 scale-x-[-1]"
        style={{
          backgroundImage: `url('https://img.freepik.com/premium-photo/pest-control-technician-spraying-insecticide-eliminate-pests-residential-area-ensuring-safe-pestfree-environment-homeowners_86390-48105.jpg')`,
        }}
      />
      <div className=" mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-[#367186] to-gray-700 bg-clip-text text-transparent">
            Areas We Serve in Melbourne
          </h2>
          <p className="text-gray-600">
            Professional pest control services across all Melbourne suburbs
          </p>
        </div>

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto no-scrollbar py-4"
        >
          {[...areas, ...areas].map((area, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-[#00B2FF] text-white text-sm font-medium px-4 py-2 rounded-full whitespace-nowrap shadow hover:bg-[#009cdc] transition"
            >
              <FaMapMarkerAlt className="text-white w-4 h-4" />
              {area}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-800 font-medium mb-4">
            Don’t see your suburb? We service all Melbourne areas!
          </p>
          <a href="/contact-us">
            <button className="bg-[#61696d] hover:bg-black text-white font-medium text-sm px-6 py-2 rounded-md transition">
              Check Your Area
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
