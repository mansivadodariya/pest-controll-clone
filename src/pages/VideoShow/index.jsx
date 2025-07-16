import { useRef, useState, useEffect } from "react";
import { FaPhoneAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const VideoShowcaseSection = () => {
  const scrollRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const checkScrollPosition = () => {
    const el = scrollRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft === 0);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  };

  useEffect(() => {
    checkScrollPosition();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScrollPosition);
    return () => el.removeEventListener("scroll", checkScrollPosition);
  }, []);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -400 : 400, behavior: "smooth" });
  };

  const videos = [
    {
      title: "Why Choose 7 States Pest Control",
      desc: "Discover what sets us apart as Melbourne's most trusted pest control experts.",
      embedUrl: "https://www.youtube.com/embed/2fII0drpSUI",
    },
    {
      title: "Professional Termite Inspection Process",
      desc: "Watch our licensed technicians conduct a thorough termite inspection.",
      embedUrl: "https://www.youtube.com/embed/f740Z6RsQ9I",
    },
    {
      title: "Advanced Pest Control Techniques",
      desc: "See how our expert team uses technology & eco-friendly treatments.",
      embedUrl: "https://www.youtube.com/embed/XR48IX97aMI",
    },
    {
      title: "Customer Success Stories",
      desc: "Hear directly from satisfied Melbourne customers.",
      embedUrl: "https://www.youtube.com/embed/mgaK-dRtpfI",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-[#367186] to-gray-700 bg-clip-text text-transparent">
              See Our Expert Team in Action
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch our professional pest control specialists demonstrate their
            expertise.
          </p>
        </div>

        {/* Horizontal Slider */}
        <div className="relative w-full max-w-7xl mx-auto px-4">
          {/* Left Arrow - outside content area */}
          <button
            onClick={() => scroll("left")}
            disabled={atStart}
            className={`absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white border border-sky-400 rounded-full p-2 shadow-md transition 
      ${atStart ? "opacity-30 cursor-not-allowed" : "hover:bg-sky-50"}`}
          >
            <FaChevronLeft className="text-sky-600" />
          </button>

          {/* Right Arrow - outside content area */}
          <button
            onClick={() => scroll("right")}
            disabled={atEnd}
            className={`absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white border border-sky-400 rounded-full p-2 shadow-md transition 
      ${atEnd ? "opacity-30 cursor-not-allowed" : "hover:bg-sky-50"}`}
          >
            <FaChevronRight className="text-sky-600" />
          </button>

          {/* Scrollable Cards Container */}
          <div
            ref={scrollRef}
            className="no-scrollbar flex overflow-x-auto gap-6 scroll-smooth py-4"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {videos.map((video, index) => (
              <div
                key={index}
                className="scroll-snap-align-start flex-shrink-0 w-full lg:w-[calc(100%/3-1.5rem)]"
              >
                {/* YouTube Video with rounded corners */}
                <div className="relative aspect-video rounded-[8px] overflow-hidden mb-4 shadow-md hover:scale-[1.03] transition duration-300 ease-in-out">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    className="w-full h-full "
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Centered Title & Description */}
                <div className="hidden lg:block text-center px-2 sm:px-4 md:px-6">
                  <h3 className="text-xs sm:text-lg md:text-xl font-semibold text-gray-800 mb-1">
                    {video.title}
                  </h3>
                  <p className="text-xs sm:text-base text-gray-600">
                    {video.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-700 mb-4 text-lg font-medium">
            Ready to experience professional pest control services?
          </p>
          <a
            href="tel:+61434660060"
            className="inline-flex items-center gap-3 group"
          >
            <button className="inline-flex items-center gap-2 bg-[#00B2FF] hover:bg-[#009cdc] text-white text-sm font-semibold px-6 py-3 rounded-[8px] shadow-md transition duration-300">
              <FaPhoneAlt className="w-4 h-4 animate-pulse" />
              Call +61 434 660 060 Today
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
