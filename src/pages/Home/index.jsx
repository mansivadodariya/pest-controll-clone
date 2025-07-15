import { useState } from "react";
import CommonFormField from "../../components/FormFiled";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    suburb: "",
    pestIssue: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.suburb.trim()) newErrors.suburb = "Suburb is required";
    if (!formData.pestIssue) newErrors.pestIssue = "Select a pest issue";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Form submitted!");
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white w-full pt-24">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Section */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Professional Pest Control Services in Melbourne
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              24/7 Emergency Response & 100% Guarantee
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="inline-flex items-center rounded-full bg-orange-500 text-white px-4 py-2 text-xs font-semibold">
                20% OFF + Free Inspection
              </div>
              <div className="inline-flex items-center rounded-full border border-white text-white px-4 py-2 text-xs font-semibold">
                Licensed & Insured
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="rounded-lg bg-white/95 backdrop-blur shadow-sm p-6">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-gray-900">
                Book Free Inspection Now
              </h2>
              <p className="text-sm text-gray-500">
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
              <CommonFormField
                label="Suburb"
                name="suburb"
                value={formData.suburb}
                onChange={handleChange}
                placeholder="Melbourne suburb"
                required
                error={errors.suburb}
              />

              <div className="mb-4">
                <label
                  htmlFor="pestIssue"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Pest Issue
                </label>
                <select
                  id="pestIssue"
                  name="pestIssue"
                  value={formData.pestIssue}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
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

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md"
              >
                Get Free Inspection
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
