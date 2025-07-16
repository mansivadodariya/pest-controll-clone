import { useEffect, useState } from "react";
import {
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaStar,
  FaStarHalfAlt,
  FaLeaf,
  FaUserTie,
  FaArrowRight,
} from "react-icons/fa";

const images = [
  "https://5.imimg.com/data5/SELLER/Default/2024/3/399078634/RY/AG/IZ/154618970/eco-friendly-pest-control-250x250.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuCazhp8tHFsKLHLPlnG_OJzKcoxAbsUNgyT2XPWKik8FTUGE6W6pbs-FnG_cTWPCWRbY&usqp=CAU",
];
export const AboutSection = () => {
  const [index, setIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ Auto-loop every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const features = [
    {
      icon: <FaShieldAlt size={48} />,
      title: "Licensed & Insured",
      desc: "Across 7 states",
    },
    {
      icon: <FaClock size={48} />,
      title: "24/7 Emergency",
      desc: "Services available",
    },
    {
      icon: <FaCheckCircle size={48} />,
      title: "100% Guarantee",
      desc: "On all treatments",
    },
    {
      icon: <FaStar size={48} />,
      title: "5-Star Rated",
      desc: "2,500+ Reviews",
    },
    {
      icon: <FaLeaf size={48} />,
      title: "Environmental",
      desc: "Compliance",
    },
    {
      icon: <FaUserTie size={48} />,
      title: "Expert Team",
      desc: "50+ Technicians",
    },
  ];

  return (
    <section className="">
      {/* Feature Icons */}
      <div className="bg-gray-50 w-full px-4 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-gray-800 transition-all duration-300 cursor-pointer 
            ${
              activeIndex === index
                ? "scale-110 text-[#00B2FF]" // ✅ Active hover effect
                : "hover:scale-105 hover:text-[#00B2FF]"
            }`}
            >
              <div
                className={`text-4xl mb-3 transition-all duration-300 ${
                  activeIndex === index
                    ? "scale-125 text-black"
                    : "text-[#00B2FF] group-hover:text-black"
                }`}
              >
                {feature.icon}
              </div>
              <h3
                className={`font-semibold sm:text-base mb-2 transition ${
                  activeIndex === index ? "text-[#00B2FF]" : "text-black"
                }`}
              >
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 max-w-[180px]">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className=" bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side – Image with badge */}
          <div className="relative h-full w-full aspect-square lg:aspect-auto rounded-md overflow-hidden bg-white py-6">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`slide-${i}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === i ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            ))}
          </div>

          {/* Right Side – Text Content */}
          <div className="space-y-5">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-sky-400 to-blue-800 bg-clip-text text-transparent">
              About 7 States Pest Control
            </h2>

            <p className="text-gray-700 leading-relaxed">
              With over a decade of experience serving Melbourne and surrounding
              areas, 7 States Pest Control has established itself as the
              region's most trusted pest management company. Our team of
              licensed professionals delivers comprehensive solutions that
              protect your property and family.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We use the latest technology and eco-friendly treatments to ensure
              safe and effective pest control. Our commitment to service has
              earned us over 2,500 five-star reviews from happy customers across
              Melbourne.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="/contact-us"
                className="inline-flex items-center bg-[#00B2FF] hover:bg-[#009cdc] text-white font-semibold px-5 py-2 rounded-md transition"
              >
                Learn More <FaArrowRight className="ml-2" />
              </a>

              <div className="flex items-center text-yellow-400 text-sm">
                {[...Array(4)].map((_, i) => (
                  <FaStar key={i} size={20} />
                ))}
                <FaStarHalfAlt size={20} />
                <span className="ml-2 text-gray-600">4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
