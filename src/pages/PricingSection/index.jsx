import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const pricingData = [
  {
    title: "Termite Barrier Treatment",
    desc: "Complete perimeter protection",
    price: "$2,500",
    color: "blue",
    highlights: [
      "8-year warranty included",
      "Professional installation",
      "Annual inspections",
    ],
  },
  {
    title: "Rodent Exclusion",
    desc: "Complete rodent-proofing service",
    price: "$450",
    color: "green",
    highlights: ["Entry point sealing", "Trapping and baiting systems"],
  },
];

export default function PricingSection() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 bg-gradient-to-r from-[#367186] to-gray-700 bg-clip-text text-transparent">
            Transparent Pricing – Affordable & Effective
          </h2>
          <div className="inline-block bg-[#00B2FF] hover:bg-[#009cdc] text-white text-sm font-semibold px-6 py-2 rounded-[8px] shadow-md transition">
            20% OFF + Free Inspection
          </div>
        </div>

        {/* ✅ Desktop Version */}
        <div className="hidden lg:flex justify-center py-12 gap-10">
          {pricingData.map((item, idx) => (
            <div
              key={idx}
              className="group relative h-[280px] w-[400px] hover:w-[650px] bg-white shadow-xl rounded-xl transition-all duration-500 overflow-hidden border border-gray-200 flex"
            >
              {/* Left Side */}
              <div className="transition-all duration-500 group-hover:w-[260px] w-[400px] flex-shrink-0 flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-700">
                  {item.title.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className="bg-gradient-to-r from-[#367186] to-gray-700 bg-clip-text text-transparent">
                    {item.title.split(" ").slice(-1)}
                  </span>
                </h2>
                <p className="transition-all duration-300 text-lg group-hover:text-sm text-gray-600 mb-2">
                  {item.desc}
                </p>
                <div className="transition-all duration-300 text-5xl group-hover:text-3xl font-bold text-[#00b2ff]">
                  {item.price}
                </div>
              </div>

              {/* Right Side – Hover Content */}
              <div className="flex flex-col justify-center items-center px-6 w-[390px] bg-gray-600 transition-all duration-500 opacity-0 group-hover:opacity-100">
                <ul className="space-y-2 text-base text-white text-left">
                  {item.highlights.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-white"
                      style={{
                        animation: "fadeIn 0.5s ease forwards",
                        animationDelay: `${i * 300}ms`,
                      }}
                    >
                      <FaCheckCircle className="text-[#00B2FF] mt-1 min-w-4" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Mobile Version (Static Cards) */}
        <div className="lg:hidden flex flex-col gap-6 px-4">
          {pricingData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
            >
              <h2 className="text-xl font-bold text-gray-700 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-2">{item.desc}</p>
              <div className="text-3xl font-bold text-[#00b2ff] mb-4">
                {item.price}
              </div>
              <ul className="space-y-1">
                {item.highlights.map((point, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <FaCheckCircle className="text-[#00B2FF]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
