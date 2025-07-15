import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const areas = [
  "Melbourne CBD", "South Yarra", "Toorak", "Richmond",
  "Fitzroy", "Carlton", "St Kilda", "Brighton",
  "Hawthorn", "Camberwell", "Box Hill", "Glen Waverley",
  "Doncaster", "Balwyn", "Kew", "Malvern",
];

export default function AreasWeServe() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Areas We Serve in Melbourne
          </h2>
          <p className="text-gray-600">
            Professional pest control services across all Melbourne suburbs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10 mx-auto">
          {areas.map((area, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg shadow-sm"
            >
              <FaMapMarkerAlt className="text-blue-600 w-4 h-4" />
              <span className="text-gray-800 text-sm font-medium">{area}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-800 font-medium mb-4">
            Don’t see your suburb? We service all Melbourne areas!
          </p>
          <a href="/contact-us">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-6 py-2 rounded-md transition">
              Check Your Area
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
