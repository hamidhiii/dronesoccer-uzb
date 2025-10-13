import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Instagram,
  Youtube,
  Facebook,
  CheckCircle,
} from "lucide-react";

const ContactSection: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const SERVER_URL = "https://dronesoccer-uzb.onrender.com/send-message";

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) newErrors.name = "Введите ваше имя";
    if (!email.trim()) {
      newErrors.email = "Введите email";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Введите корректный email";
    }
    if (!subject.trim()) newErrors.subject = "Введите тему сообщения";
    if (message.trim().length < 10)
      newErrors.message = "Сообщение должно содержать минимум 10 символов";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    const formData = { name, email, subject, message };

    try {
      const response = await fetch(SERVER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setModalOpen(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setErrors({});
      } else {
        alert("❌ Не удалось отправить сообщение. Попробуйте позже.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Ошибка соединения с сервером.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          GET IN TOUCH
          <div className="w-20 h-1 mx-auto mt-2 bg-gradient-to-r from-blue-600 to-red-600 rounded" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
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

          {/* RIGHT SIDE — FORM */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 ${
                  errors.name
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 ${
                  errors.subject
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 ${
                  errors.message
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg py-3 text-white font-semibold bg-gradient-to-r from-blue-600 to-red-600 hover:opacity-90 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* ✅ SUCCESS MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-sm text-center shadow-lg">
            <CheckCircle className="text-green-500 w-12 h-12 mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Ваш запрос принят!</h3>
            <p className="text-gray-600">
              Мы получили ваше сообщение и свяжемся с вами в ближайшее время.
            </p>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-6 px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold hover:opacity-90 transition"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
