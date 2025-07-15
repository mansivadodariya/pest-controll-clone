import React from "react";

const services = [
  {
    title: "Termites",
    description:
      "Professional termite inspections, treatments, and prevention systems to protect your property investment.",
    href: "/termite-control",
    color: "bg-red-200",
    icon: (
      <svg
        className="w-10 h-10 text-red-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 4c-1.5 0-2.5 1-2.5 2s1 2 2.5 2 2.5-1 2.5-2-1-2-2.5-2zm-3 4c-1 0-1.5.5-1.5 1s.5 1 1.5 1 1.5-.5 1.5-1-.5-1-1.5-1zm6 0c-1 0-1.5.5-1.5 1s.5 1 1.5 1 1.5-.5 1.5-1-.5-1-1.5-1zm-3 2c-2 0-3.5 1-3.5 2.5v3c0 1.5 1.5 2.5 3.5 2.5s3.5-1 3.5-2.5v-3c0-1.5-1.5-2.5-3.5-2.5z"></path>
      </svg>
    ),
  },
  {
    title: "Spiders",
    description:
      "Safe and effective spider control treatments to eliminate dangerous and nuisance spider species.",
    href: "https://7statespestcontrol.com.au/our-services/spider-control-treatment-melbourne/",
    color: "bg-purple-200",
    icon: (
      <svg
        className="w-10 h-10 text-purple-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
        <path d="M3 12l2-2v1l2 1-2 1v1l-2-2zm18 0l-2-2v1l-2 1 2 1v1l2-2z"></path>
        <path d="M5.5 6.5L7 8l-1 1-1.5-1.5 1-1zM18.5 6.5l-1.5 1.5-1-1 1.5-1.5 1 1z"></path>
      </svg>
    ),
  },
  {
    title: "Rodents",
    description:
      "Comprehensive rodent control and exclusion services to eliminate rats and mice from your property.",
    href: "https://7statespestcontrol.com.au/our-services/rodent-control-melbourne/",
    color: "bg-gray-200",
    icon: (
      <svg
        className="w-10 h-10 text-gray-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M18 12c0-3.31-2.69-6-6-6-1.5 0-2.91.56-4 1.5C6.5 6.5 6 5.5 6 4.5 6 3.67 5.33 3 4.5 3S3 3.67 3 4.5c0 2.5 1.5 4.5 3.5 5.5-.5 1-.5 2-.5 3 0 3.31 2.69 6 6 6s6-2.69 6-6c0-1-.17-1.96-.5-2.85.83-.65 1.5-1.65 1.5-2.65 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5c0 1-.5 2-1.5 2.5z"></path>
      </svg>
    ),
  },
  {
    title: "Bed Bugs",
    description:
      "Effective bed bug elimination treatments using advanced techniques for complete eradication.",
    href: "https://7statespestcontrol.com.au/our-services/bed-bug-treatment/",
    color: "bg-orange-200",
    icon: (
      <svg
        className="w-10 h-10 text-orange-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <ellipse cx="12" cy="12" rx="6" ry="4"></ellipse>
        <circle cx="8" cy="10" r="0.8"></circle>
        <circle cx="16" cy="10" r="0.8"></circle>
      </svg>
    ),
  },
  {
    title: "Ants",
    description:
      "Professional ant control solutions targeting colonies and preventing future infestations.",
    href: "https://7statespestcontrol.com.au/our-services/ant-pest-control/",
    color: "bg-green-200",
    icon: (
      <svg
        className="w-10 h-10 text-green-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="6" cy="12" r="2"></circle>
        <circle cx="12" cy="12" r="2.5"></circle>
        <circle cx="18" cy="12" r="2"></circle>
      </svg>
    ),
  },
  {
    title: "Cockroaches",
    description:
      "Comprehensive cockroach elimination and prevention programs for homes and businesses.",
    href: "https://7statespestcontrol.com.au/our-services/cockroach-control/",
    color: "bg-yellow-200",
    icon: (
      <svg
        className="w-10 h-10 text-yellow-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <ellipse cx="12" cy="12" rx="7" ry="4"></ellipse>
        <circle cx="9" cy="10" r="1"></circle>
        <circle cx="15" cy="10" r="1"></circle>
      </svg>
    ),
  },
  {
    title: "Wasps & Bees",
    description:
      "Safe wasp nest removal and bee relocation services by licensed and experienced technicians.",
    href: "https://7statespestcontrol.com.au/our-services/wasp-nest-removal-melbourne/",
    color: "bg-amber-200",
    icon: (
      <svg
        className="w-10 h-10 text-amber-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <ellipse cx="12" cy="12" rx="4" ry="6"></ellipse>
        <circle cx="10.5" cy="9" r="0.8"></circle>
        <circle cx="13.5" cy="9" r="0.8"></circle>
      </svg>
    ),
  },
  {
    title: "Silverfish",
    description:
      "Targeted silverfish treatment solutions to protect your books, clothing, and household items.",
    href: "https://7statespestcontrol.com.au/our-services/silverfish-treatment/",
    color: "bg-blue-200",
    icon: (
      <svg
        className="w-10 h-10 text-blue-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20 12c0-2-1-3-2-3-1.5 0-2.5 1-3 2-1-1-2-1.5-3-1.5s-2 .5-3 1.5c-.5-1-1.5-2-3-2-1 0-2 1-2 3 0 1.5.5 2.5 1 3.5.5 1 1 2 2 2.5 1 .5 2 .5 3 0 1-.5 2-1.5 3-2.5 1 1 2 2 3 2.5 1 .5 2 .5 3 0 1-.5 1.5-1.5 2-2.5.5-1 1-2 1-3.5z"></path>
      </svg>
    ),
  },
];

const ServiceCard = ({ title, description, href, icon, color }) => {
  return (
    <div className="rounded-lg bg-white text-gray-800 shadow-sm group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-blue-200">
      <a href={href}>
        <div className="p-6 text-center">
          <div
            className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-${color}-200 transition-colors`}
          >
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 text-sm">{description}</p>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium border border-gray-300 bg-white hover:bg-blue-600 hover:text-white h-10 px-4 py-2 w-full transition-all">
            Learn More
          </button>
        </div>
      </a>
    </div>
  );
};

export default function ServicesPage() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Services We Offer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive pest control solutions for all types of pest problems
            across Melbourne and surrounding areas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Don't see your pest problem listed? We handle all types of pest
            control issues.
          </p>
          <a href="tel:+61434660060">
            <button className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 h-11 rounded-md px-8">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.18 4.08 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.4 1.88.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.93.3 1.85.57 2.81.7a2 2 0 0 1 1.72 2.03z" />
              </svg>
              Call +61 434 660 060 for Custom Solutions
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
