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

export const AboutSection = () => {
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
      <div className="bg-gray-50  w-full px-4 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-black"
            >
              <div className="text-3xl mb-3 text-[#2563eb]">{feature.icon}</div>
              <h3 className="font-[600] sm:text-base mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="mt-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About 7 States Pest Control
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              With over a decade of experience serving Melbourne and surrounding
              areas, 7 States Pest Control has established itself as the
              region's most trusted pest management company. Our team of
              licensed professionals delivers comprehensive solutions that
              protect your property and family.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We pride ourselves on using the latest technology and eco-friendly
              treatments to ensure effective pest control while maintaining the
              safety of your environment. Our commitment to excellence has
              earned us over 2,500 five-star reviews from satisfied customers
              across Melbourne.
            </p>

            {/* CTA & Rating */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/contact-us"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md transition"
              >
                Learn More <FaArrowRight className="ml-2" />
              </a>

              <div className="flex items-center text-yellow-400 text-sm">
                {[...Array(4)].map((_, i) => (
                  <FaStar key={i} size={20} />
                ))}
                <FaStarHalfAlt size={20}/>
                <span className="ml-2 text-gray-600">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://media.istockphoto.com/id/1066978818/photo/exterminator-working.jpg?s=612x612&w=0&k=20&c=sddrtDtVPnyn8jIukuNcyCQS0gm6I4GwQQ_CGvs9UYM="
              alt="Pest Control Technician"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
