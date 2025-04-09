import axios from "axios";
import { useState } from "react";

export default function FeedbackForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({ name: "", email: "", message: "" });

    const validateForm = () => {
        const newErrors = { name: "", email: "", message: "" };

        if (!form.name.trim()) {
            newErrors.name = "Please provide your full name so we know who you are.";
        } else if (form.name.trim().length < 3) {
            newErrors.name = "Your name must be at least 3 characters long.";
        }

        if (!form.email.trim()) {
            newErrors.email = "We need your email address to contact you.";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "The email address you entered is not valid. Please check and try again.";
        }

        if (!form.message.trim()) {
            newErrors.message = "Please share your feedback or message with us.";
        } else if (form.message.trim().length < 10) {
            newErrors.message = "Your feedback must be at least 10 characters long to help us understand better.";
        }

        setErrors(newErrors);
        return !Object.values(newErrors).some((error) => error !== "");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        try {
            await axios.post("/api/submit-feedback", form);
            setForm({ name: "", email: "", message: "" });
            setErrors({ name: "", email: "", message: "" });
            alert("Thank you for your feedback! We will get back to you soon.");
        } catch (err) {
            console.error(err);
            alert("Something went wrong while submitting your feedback. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-foreground flex flex-col items-center p-6 rounded-lg shadow space-y-4"
        >
            <h1 className="text-2xl font-bold mb-4 text-background">Feedback Form</h1>
            <p className="text-gray-500 mb-4">We value your feedback. Please fill out the form below.</p>
            <div className="w-full">
                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full text-background border p-2 rounded"
                    title="Please enter your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div className="w-full">
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full text-background border p-2 rounded"
                    title="Please enter a valid email address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="w-full">
                <textarea
                    placeholder="Your Feedback"
                    className="w-full text-background border p-2 rounded"
                    title="Please enter your feedback"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
            <button
                type="submit"
                title="Submit your feedback"
                className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                disabled={loading}
            >
                {loading ? "Submitting..." : "Submit Feedback"}
            </button>
        </form>
    );
}