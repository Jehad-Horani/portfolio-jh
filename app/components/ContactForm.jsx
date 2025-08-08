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
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!form.name || !form.email) {
      setMessage("يرجى تعبئة الاسم والبريد الإلكتروني");
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
      setMessage("حدث خطأ يرجى المحاولة لاحقًا");
      console.error(error);
    } else {
      setMessage("تم إرسال طلبك بنجاح، شكرًا لك!");
      setForm({ name: "", phone: "", email: "", idea: "" });
    }
    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-900 py-16 px-6 md:px-16 text-white"
    >
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-8">
        <h2 className="text-4xl font-extrabold mb-8 text-center drop-shadow-lg">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <label className="block">
            <span className="text-white font-semibold">الاسم *</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md border border-white/30 bg-white/10 px-4 py-3 text-white placeholder-white/70 focus:border-pink-500 focus:ring focus:ring-pink-400 focus:ring-opacity-50 transition"
              placeholder="أدخل اسمك"
            />
          </label>

          <label className="block">
            <span className="text-white font-semibold">رقم الهاتف</span>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-white/30 bg-white/10 px-4 py-3 text-white placeholder-white/70 focus:border-pink-500 focus:ring focus:ring-pink-400 focus:ring-opacity-50 transition"
              placeholder="أدخل رقم هاتفك"
            />
          </label>

          <label className="block">
            <span className="text-white font-semibold">البريد الإلكتروني *</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md border border-white/30 bg-white/10 px-4 py-3 text-white placeholder-white/70 focus:border-pink-500 focus:ring focus:ring-pink-400 focus:ring-opacity-50 transition"
              placeholder="أدخل بريدك الإلكتروني"
            />
          </label>

          <label className="block">
            <span className="text-white font-semibold">نبذة بسيطة عن الفكرة</span>
            <textarea
              name="idea"
              value={form.idea}
              onChange={handleChange}
              rows={4}
              className="mt-1 w-full rounded-md border border-white/30 bg-white/10 px-4 py-3 text-white placeholder-white/70 focus:border-pink-500 focus:ring focus:ring-pink-400 focus:ring-opacity-50 transition resize-none"
              placeholder="شاركنا فكرتك أو متطلبات مشروعك"
            ></textarea>
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-600 hover:bg-pink-700 transition text-white font-semibold rounded-md py-3 shadow-lg shadow-pink-600/50 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "جاري الإرسال..." : "إرسال الطلب"}
          </button>

          {message && (
            <p
              className={`mt-4 text-center font-semibold ${
                message.includes("خطأ") ? "text-red-400" : "text-green-400"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
