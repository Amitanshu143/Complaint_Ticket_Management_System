import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import api from "../../services/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await api.post("/contact/add", formData);
      if (res.data.success) {
        setSuccess("Message sent successfully! We’ll contact you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2"
      >
        {/* Left Info Section */}
        <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="mb-8 text-white/80">
            Have questions regarding ticket submission or system issues?
            Our team is here to help you.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <Mail />
              <span>support@ticketsystem.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin />
              <span>Bhubaneswar, Odisha, India</span>
            </div>
          </div>

          <p className="mt-10 text-sm text-white/70">
            ⏱ We usually respond within 24 hours.
          </p>
        </div>

        {/* Right Form Section */}
        <div className="p-10">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Send Message
          </h3>

          {success && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm">
              {success}
            </div>
          )}

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone (Optional)"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />

            <textarea
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl h-32 resize-none focus:ring-2 focus:ring-indigo-500 outline-none transition"
              required
            ></textarea>

            <motion.button
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 transition disabled:opacity-60"
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;