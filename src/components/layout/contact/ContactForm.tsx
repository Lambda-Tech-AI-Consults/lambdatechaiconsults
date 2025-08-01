'use client'
import { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all required fields.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Invalid email address.');
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setSuccess(true);
      setForm({ name: '', email: '', phone: '', message: '' });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-600 text-sm">Message sent successfully!</p>}

      <input
        type="text"
        name="name"
        placeholder="Full Name *"
        value={form.name}
        onChange={handleChange}
        className="w-full border border-gray-700 rounded px-4 py-2"
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address *"
        value={form.email}
        onChange={handleChange}
        className="w-full border border-gray-700 rounded px-4 py-2"
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        className="w-full border border-gray-700 rounded px-4 py-2"
      />
      <textarea
        name="message"
        placeholder="Your Message *"
        rows={5}
        value={form.message}
        onChange={handleChange}
        className="w-full border border-gray-700 rounded px-4 py-2"
      ></textarea>
      <button type="submit" className="bg-[#1c1f4a] hover:bg-[#0f0f3b] text-white px-6 py-2 rounded">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
