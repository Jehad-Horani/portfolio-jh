"use client";

import { useState } from "react";
import { supabase } from "/lib/supabaseClient";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    idea: "",
  });
  const [loading, setLoading] = useState(false);
  
  // Modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalError, setModalError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.name || !form.email) {
      setModalMessage("Please fill in your name and email.");
      setModalError(true);
      setModalOpen(true);
      setLoading(false);
      return;
    }

    const { data, error } = await supabase.from("contacts").insert([
      {
        name: form.name,
        phone: form.phone,
        email: form.email,
        idea: form.idea,
      },
    ]);

    if (error) {
      setModalMessage("Oops! Something went wrong. Please try again later.");
      setModalError(true);
      setModalOpen(true);
      console.error(error);
    } else {
      setModalMessage("Thank you! Your request has been sent successfully.");
      setModalError(false);
      setModalOpen(true);
      setForm({ name: "", phone: "", email: "", idea: "" });
    }
    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="bg-gray-950 mt-[900px] py-16 px-6 md:px-16 text-white"
    >
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-8">
        <h2 className="text-4xl font-extrabold mb-8 text-center drop-shadow-lg">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <label className="block">
            <span className="text-white font-semibold">Name *</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md border border-white/30 bg-white/10 px-4 py-3 text-white placeholder-white/70 focus:border-pink-500 focus:ring focus:ring-pink-400 focus:ring-opacity-50 transition"
              placeholder="Enter your name"
            />
          </label>

          <label className="block">
            <span className="text-white font-semibold">Phone</span>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-white/30 bg-white/10 px-4 py-3 text-white placeholder-white/70 focus:border-pink-500 focus:ring focus:ring-pink-400 focus:ring-opacity-50 transition"
              placeholder="Enter your phone number"
            />
          </label>

          <label className="block">
            <span className="text-white font-semibold">Email *</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md border border-white/30 bg-white/10 px-4 py-3 text-white placeholder-white/70 focus:border-pink-500 focus:ring focus:ring-pink-400 focus:ring-opacity-50 transition"
              placeholder="Enter your email"
            />
          </label>

          <label className="block">
            <span className="text-white font-semibold">Brief Idea</span>
            <textarea
              name="idea"
              value={form.idea}
              onChange={handleChange}
              rows={4}
              className="mt-1 w-full rounded-md border border-white/30 bg-white/10 px-4 py-3 text-white placeholder-white/70 focus:border-pink-500 focus:ring focus:ring-pink-400 focus:ring-opacity-50 transition resize-none"
              placeholder="Share your idea or project requirements"
            ></textarea>
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-br from-pink-500 to-purple-600 hover:scale-105 cursor-pointer transition text-white font-semibold rounded-md py-3 shadow-lg shadow-pink-600/50 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Request"}
          </button>
        </form>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6 text-center shadow-lg relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 text-2xl font-bold"
              aria-label="Close modal"
            >
              &times;
            </button>
            <h3 className={`text-xl font-semibold mb-4 ${modalError ? "text-red-600" : "text-green-600"}`}>
              {modalError ? "Error" : "Success"}
            </h3>
            <p className="text-gray-800">{modalMessage}</p>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-6 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-md transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
