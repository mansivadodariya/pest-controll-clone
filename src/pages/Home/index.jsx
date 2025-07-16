import { useState } from "react";
import CommonFormField from "../../components/FormFiled";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { FaArrowDown19 } from "react-icons/fa6";

const HeroSection = () => {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    suburb: "",
    pestIssue: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // ✅ Input restrictions
    if (name === "phone") {
      // Allow only digits and max 10 characters
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    if (name === "name" || name === "suburb") {
      // Limit max length to 50
      if (value.length > 50) return;
    }

    if (name === "email" && value.length > 100) return; // Email max 100 chars

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error on change
  };

  const validate = () => {
    const newErrors = {};

    // ✅ Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // ✅ Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit number";
    }

    // ✅ Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // ✅ Suburb validation
    if (!formData.suburb.trim()) {
      newErrors.suburb = "Suburb is required";
    }

    // ✅ Pest Issue validation
    if (!formData.pestIssue) {
      newErrors.pestIssue = "Select a pest issue";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Form submitted successfully!");
    }
  };

  return (
    <section
      className={`relative bg-gradient-to-r bg-white text-white w-full ${
        showForm ? "pt-4" : "pt-24"
      }`}
    >
      <div className="absolute inset-0 bg-white-300/40"></div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 scale-x-[-1]"
        style={{
          backgroundImage: `url('https://img.freepik.com/premium-psd/person-protective-suit-spraying-plants_538547-14342.jpg')`,
        }}
      />

      <div className="relative container mx-auto px-4 py-20 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Section */}
          <div>
            <h1
              className="text-4xl lg:text-5xl font-bold mb-6 
               bg-gradient-to-r from-[#00B2FF] to-black 
               bg-clip-text text-transparent"
            >
              Professional Pest Control Services in Melbourne
            </h1>

            <p className="text-xl font-medium mb-8 text-gray-500">
              24/7 Emergency Response & 100% Guarantee
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {/* Offer Badge */}
              <div className="inline-flex items-center rounded-md bg-[#2e3031] text-white px-4 py-2 text-xs font-semibold">
                20% OFF + Free Inspection
              </div>

              {/* Credential Badge */}
              <div className="inline-flex items-center rounded-md border border-[#34383a] text-[#00B2FF] px-4 py-2 text-xs font-semibold bg-white">
                Licensed & Insured
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className=" text-center">
            <button
              onClick={() => setShowForm((prev) => !prev)}
              className={`mx-auto text-[#00B2FF] font-semibold flex  gap-2 px-4 py-2 ${
                showForm
                  ? "items-center justify-center opacity-40 "
                  : "border hover:bg-[#00B2FF] items-center justify-center"
              } border-[#00B2FF] rounded-md  hover:text-white transition`}
            >
              {showForm ? "" : "Book Free Inspection"}
              {showForm ? <FaArrowUp /> : <FaArrowDown />}
            </button>
            <div
              className={`transition-all duration-500 overflow-hidden ${
                showForm
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0 pointer-events-none"
              }`}
            >
              <div className="rounded-xl bg-white/20 backdrop-blur-md shadow-md p-6 animate-slideFadeIn">
                {/* Toggle Form Button */}

                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-[#343b3d] mb-2">
                    Book Free Inspection Now
                  </h2>
                  <p className="text-sm text-[#00B2FF]">
                    Get your property protected today
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <CommonFormField
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      error={errors.name}
                    />
                    <CommonFormField
                      label="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone"
                      required
                      error={errors.phone}
                    />
                  </div>

                  {/* Email */}
                  <CommonFormField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    error={errors.email}
                  />

                  {/* Suburb */}
                  <CommonFormField
                    label="Suburb"
                    name="suburb"
                    value={formData.suburb}
                    onChange={handleChange}
                    placeholder="Melbourne suburb"
                    required
                    error={errors.suburb}
                  />

                  {/* Pest Issue Dropdown */}
                  <div>
                    <label
                      htmlFor="pestIssue"
                      className="block text-start text-sm font-medium text-gray-700 mb-1"
                    >
                      Pest Issue
                    </label>
                    <select
                      id="pestIssue"
                      name="pestIssue"
                      value={formData.pestIssue}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-md bg-white border text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00B2FF] ${
                        errors.pestIssue ? "border-red-500" : "border-gray-300"
                      }`}
                      required
                    >
                      <option value="">Select pest type</option>
                      <option value="termites">Termites</option>
                      <option value="rodents">Rodents</option>
                      <option value="ants">Ants</option>
                      <option value="spiders">Spiders</option>
                      <option value="cockroaches">Cockroaches</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.pestIssue && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.pestIssue}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full text-white font-semibold py-2 px-4 rounded-md 
                 bg-[#00B2FF] hover:bg-[#00a0e0] transition-colors duration-300"
                  >
                    Get Free Inspection
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
