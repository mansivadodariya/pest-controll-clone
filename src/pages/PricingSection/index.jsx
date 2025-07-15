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
    highlights: [
      "Entry point sealing",
      "Trapping and baiting systems",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Transparent Pricing – Affordable & Effective
          </h2>
          <div className="inline-block bg-orange-500 text-white text-lg font-semibold px-6 py-2 rounded-full">
            20% OFF + Free Inspection
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingData.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-lg bg-white shadow-sm border-2 border-${item.color}-200`}
            >
              <div className="p-6 pb-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
              <div className="px-6 pt-0 pb-6">
                <div
                  className={`text-3xl font-bold text-${item.color}-600 mb-4`}
                >
                  {item.price}
                </div>
                <ul className="space-y-2">
                  {item.highlights.map((point, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <FaCheckCircle className="text-green-600 w-4 h-4" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
