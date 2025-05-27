"use client";

import { useState } from "react";

export function TryForFree() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!name || !email) return alert("Please fill in both fields");

    setLoading(true);
    try {
      const res = await fetch("/api/try-free", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Submission failed. Try again.");
      }
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center mt-10">
      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-700 text-white font-bold px-6 py-2 rounded"
        >
          Try for Free
        </button>
      )}

      {showForm && !submitted && (
        <div className="mt-6 flex flex-col items-center gap-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full max-w-sm px-4 py-2 border rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full max-w-sm px-4 py-2 border rounded"
          />
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-6 py-2 rounded"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      )}

      {submitted && (
        <div className="mt-4 text-green-600 font-medium">
          Thank you! We'll contact you soon.
        </div>
      )}
    </div>
  );
}
