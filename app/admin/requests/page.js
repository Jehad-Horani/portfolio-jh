"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabaseClient";

export default function RequestsPage() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const correctPassword = "JehadHorani2005"; // كلمة السر

  useEffect(() => {
    if (authenticated) {
      fetchRequests();
    }
  }, [authenticated]);

  const fetchRequests = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setRequests(data);
    }
    setLoading(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setAuthenticated(true);
    } else {
      alert("كلمة السر غير صحيحة");
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <form
          onSubmit={handleLogin}
          className="bg-white p-6 rounded shadow-md w-80"
        >
          <h2 className="text-xl text-black font-bold mb-4 text-center">تسجيل الدخول</h2>
          <input
            type="password"
            placeholder="أدخل كلمة السر"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 rounded mb-4"
          />
          <button
            type="submit"
            className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded w-full"
          >
            دخول
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mt-30 mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">طلبات التواصل</h1>

      {loading && <p>جاري التحميل...</p>}

      {!loading && requests.length === 0 && <p>لا توجد طلبات حالياً.</p>}

      {!loading && requests.length > 0 && (
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-800">
              <th className="border p-2">الاسم</th>
              <th className="border p-2">رقم الهاتف</th>
              <th className="border p-2">البريد الإلكتروني</th>
              <th className="border p-2">الفكرة</th>
              <th className="border p-2">تاريخ الإرسال</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id}>
                <td className="border p-2">{req.name}</td>
                <td className="border p-2">{req.phone || "-"}</td>
                <td className="border p-2">{req.email}</td>
                <td className="border p-2">{req.idea || "-"}</td>
                <td className="border p-2">
                  {new Date(req.created_at).toLocaleString("ar-JO")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
