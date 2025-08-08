"use client"; // لو Next.js app directory

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabaseClient";

export default function RequestsPage() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRequests();
  }, []);

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

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">طلبات التواصل</h1>

      {loading && <p>جاري التحميل...</p>}

      {!loading && requests.length === 0 && <p>لا توجد طلبات حالياً.</p>}

      {!loading && requests.length > 0 && (
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-100">
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
