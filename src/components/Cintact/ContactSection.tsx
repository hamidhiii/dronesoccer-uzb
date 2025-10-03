import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section  className="py-16 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          GET IN TOUCH
          <div className="w-20 h-1 mx-auto mt-2 bg-gradient-to-r from-blue-600 to-red-600 rounded" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                    <Mail className="text-blue-600" size={20} />
                  </span>
                  <span>team@skyforceelite.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
                    <Phone className="text-red-600" size={20} />
                  </span>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                    <MapPin className="text-gray-600" size={20} />
                  </span>
                  <span>San Francisco, CA</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="h-10 w-10 flex items-center justify-center rounded-lg bg-sky-500 text-white"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 flex items-center justify-center rounded-lg bg-pink-500 text-white"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 flex items-center justify-center rounded-lg bg-black text-white"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600 text-white"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right side (form) */}
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                rows={5}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg py-3 text-white font-semibold bg-gradient-to-r from-blue-600 to-red-600 hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
