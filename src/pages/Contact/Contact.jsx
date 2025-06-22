import { useState } from "react";
import axios from "axios";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import { useSelector } from "react-redux";
import { API_BASE_URL } from "~/constants/constants";

export default function Contact() {
  const user = useSelector((state) => state.user);

  const [form, setForm] = useState({
    id: user?.id || "",
    name: user?.fullName || "",
    email: user?.email || "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API_BASE_URL}/contacts"`, form);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar user={user} />

      <main className="flex-grow bg-base-200/30 py-12 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Contact Us</h2>
            <p className="text-gray-700">
              Have a question, feedback, or need help? Fill out the form or reach us directly.
            </p>
            <div className="text-sm text-gray-600 space-y-2">
              <p><strong>Email:</strong> support@quizmaster.com</p>
              <p><strong>Phone:</strong> +84 123 456 789</p>
              <p><strong>Address:</strong> 600 Nguyễn Văn Cừ Nối Dài, An Bình, Bình Thủy, Cần Thơ</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="input input-bordered w-full"
                disabled
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="input input-bordered w-full"
                disabled
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                required
                className="textarea textarea-bordered w-full"
              />
            </div>
            <button type="submit" className="btn btn-primary w-full text-white">
              Send Message
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}