"use client"; // لو تستخدم Next.js 13 app directory

import { useState } from "react";
import { supabase } from "/lib/supabaseClient";

export default function ContactForm() {
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
      setMessage("يرجى تعبئة الاسم والإيميل");
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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">نموذج طلب التواصل</h2>

      <label className="block mb-2">
        الاسم *
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded mt-1"
        />
      </label>

      <label className="block mb-2">
        رقم الهاتف
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-2 rounded mt-1"
        />
      </label>

      <label className="block mb-2">
        البريد الإلكتروني *
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded mt-1"
        />
      </label>

      <label className="block mb-4">
        نبذة بسيطة عن الفكرة
        <textarea
          name="idea"
          value={form.idea}
          onChange={handleChange}
          className="w-full border p-2 rounded mt-1"
          rows={4}
        ></textarea>
      </label>

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "جاري الإرسال..." : "إرسال الطلب"}
      </button>

      {message && <p className="mt-4 text-center">{message}</p>}
    </form>
  );
}
