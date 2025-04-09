'use client';

import { useState } from "react";
import axios from "axios";
interface Feedback {
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [showFeedbacks, setShowFeedbacks] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/api/submit-feedback", form);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const toggleFeedbacks = async () => {
    if (!showFeedbacks) {
      const res = await axios.get("/api/get-feedbacks");
      setFeedbacks(res.data);
    }
    setShowFeedbacks(!showFeedbacks);
  };

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-xl w-full space-y-6">
        <h1 className="text-3xl font-bold text-center">Feedback Collector</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow space-y-4"
        >
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-2 rounded"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            placeholder="Your Feedback"
            className="w-full border p-2 rounded"
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Feedback"}
          </button>
        </form>

        <button
          className="text-blue-600 underline"
          onClick={toggleFeedbacks}
        >
          {showFeedbacks ? "Hide Feedbacks" : "View Submitted Feedback"}
        </button>

        {showFeedbacks && (
          <div className="space-y-2">
            {feedbacks.map((fb, i) => (
              <div key={i} className="bg-white p-4 rounded shadow">
                <p className="font-bold">{fb.name} ({fb.email})</p>
                <p>{fb.message}</p>
                <p className="text-xs text-gray-500">
                  {new Date(fb.timestamp).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}

        <footer className="text-center text-sm text-gray-400 pt-4">
          Created by Tanvish · April 2025
        </footer>
      </div>
    </main>
  );
}
