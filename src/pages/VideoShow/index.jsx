import { FaPhone } from "react-icons/fa";

export const VideoShowcaseSection = () => {
  const videos = [
    {
      title: "Why Choose 7 States Pest Control",
      desc: "Discover what sets us apart as Melbourne's most trusted pest control experts with our comprehensive approach to property protection.",
      embedUrl: "https://www.youtube.com/embed/2fII0drpSUI",
    },
    {
      title: "Professional Termite Inspection Process",
      desc: "Watch our licensed technicians conduct a thorough termite inspection using advanced detection equipment and proven methodologies.",
      embedUrl: "https://www.youtube.com/embed/f740Z6RsQ9I",
    },
    {
      title: "Advanced Pest Control Techniques",
      desc: "See how our expert team uses cutting-edge technology and eco-friendly treatments to eliminate pests effectively and safely.",
      embedUrl: "https://www.youtube.com/embed/XR48IX97aMI",
    },
    {
      title: "Customer Success Stories",
      desc: "Hear directly from satisfied Melbourne customers about their experience with our comprehensive pest control services.",
      embedUrl: "https://www.youtube.com/embed/mgaK-dRtpfI",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">See Our Expert Team in Action</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch our professional pest control specialists demonstrate their expertise and
            commitment to protecting Melbourne properties
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={index}
              className="rounded-lg border bg-white shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{video.title}</h3>
                <p className="text-gray-600 mb-4">{video.desc}</p>
                <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to experience professional pest control services for your property?
          </p>
          <a href="tel:+61434660060">
            <button className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white h-11 rounded-md px-8 bg-orange-500 hover:bg-orange-600 transition">
              <FaPhone className="w-4 h-4 mr-2" />
              Call +61 434 660 060 Today
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
