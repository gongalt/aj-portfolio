"use client";

import { useState, useId } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Button from "@/components/ui/Button";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  /** Honeypot — must remain empty */
  website: string;
}

const SUBJECT_OPTIONS = [
  { value: "", label: "Select a subject" },
  { value: "Freelance Project", label: "Freelance Project" },
  { value: "Product Collaboration", label: "Product Collaboration" },
  { value: "AI Integration", label: "AI Integration" },
  { value: "Consulting", label: "Consulting" },
  { value: "Other", label: "Other" },
];

const inputClass =
  "w-full bg-navy-light border border-navy-lighter rounded px-4 py-3 text-slate-lightest placeholder:text-slate/50 focus:outline-none focus:border-green-accent transition-colors duration-200";

const labelClass = "block text-sm text-slate-light mb-2 font-medium";

export default function ContactForm() {
  const uid = useId();

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name as keyof FormState]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function validate(): boolean {
    const errors: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) {
      errors.name = "Name is required.";
    } else if (form.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters.";
    }

    if (!form.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!form.subject) {
      errors.subject = "Please select a subject.";
    }

    if (!form.message.trim()) {
      errors.message = "Message is required.";
    } else if (form.message.trim().length < 20) {
      errors.message = "Message must be at least 20 characters.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!validate()) return;

    // Honeypot check — silently "succeed" so bots don't retry
    if (form.website) {
      setStatus("success");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      await addDoc(collection(db, "contact-submissions"), {
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject,
        message: form.message.trim(),
        createdAt: serverTimestamp(),
        read: false,
      });

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "", website: "" });
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong. Please try again or email me at jensonadrian@gmail.com."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="alert"
        aria-live="polite"
        className="bg-green-accent/10 border border-green-accent/30 rounded-lg p-8 text-center"
      >
        <div className="mb-4" aria-hidden="true">
          <svg
            className="w-12 h-12 text-green-accent mx-auto"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3 className="text-slate-lightest font-semibold text-xl mb-2">Message Sent!</h3>
        <p className="text-slate">
          Thanks for reaching out. I&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 font-mono text-sm text-green-accent hover:underline focus:outline-none focus:ring-2 focus:ring-green-accent focus:ring-offset-2 focus:ring-offset-navy rounded"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
    >
      {/* Global error banner */}
      {status === "error" && errorMessage && (
        <div
          role="alert"
          aria-live="assertive"
          className="mb-6 bg-red-500/10 border border-red-500/30 text-red-400 rounded px-4 py-3 text-sm"
        >
          {errorMessage}
        </div>
      )}

      {/* Honeypot (hidden from real users, visible to bots) */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}
        tabIndex={-1}
      >
        <label htmlFor={`${uid}-website`}>Website (leave blank)</label>
        <input
          id={`${uid}-website`}
          name="website"
          type="text"
          value={form.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        {/* Name */}
        <div>
          <label htmlFor={`${uid}-name`} className={labelClass}>
            Name <span className="text-green-accent" aria-hidden="true">*</span>
          </label>
          <input
            id={`${uid}-name`}
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            placeholder="Jane Smith"
            required
            aria-required="true"
            aria-describedby={fieldErrors.name ? `${uid}-name-error` : undefined}
            aria-invalid={!!fieldErrors.name}
            className={`${inputClass} ${fieldErrors.name ? "border-red-500/60" : ""}`}
          />
          {fieldErrors.name && (
            <p id={`${uid}-name-error`} role="alert" className="mt-1.5 text-xs text-red-400">
              {fieldErrors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor={`${uid}-email`} className={labelClass}>
            Email <span className="text-green-accent" aria-hidden="true">*</span>
          </label>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            placeholder="jane@example.com"
            required
            aria-required="true"
            aria-describedby={fieldErrors.email ? `${uid}-email-error` : undefined}
            aria-invalid={!!fieldErrors.email}
            className={`${inputClass} ${fieldErrors.email ? "border-red-500/60" : ""}`}
          />
          {fieldErrors.email && (
            <p id={`${uid}-email-error`} role="alert" className="mt-1.5 text-xs text-red-400">
              {fieldErrors.email}
            </p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div className="mb-5">
        <label htmlFor={`${uid}-subject`} className={labelClass}>
          Subject <span className="text-green-accent" aria-hidden="true">*</span>
        </label>
        <select
          id={`${uid}-subject`}
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
          aria-required="true"
          aria-describedby={fieldErrors.subject ? `${uid}-subject-error` : undefined}
          aria-invalid={!!fieldErrors.subject}
          className={`${inputClass} appearance-none cursor-pointer ${
            fieldErrors.subject ? "border-red-500/60" : ""
          } ${!form.subject ? "text-slate/50" : "text-slate-lightest"}`}
        >
          {SUBJECT_OPTIONS.map((opt) => (
            <option
              key={opt.value}
              value={opt.value}
              disabled={opt.value === ""}
              className="bg-navy-light text-slate-lightest"
            >
              {opt.label}
            </option>
          ))}
        </select>
        {fieldErrors.subject && (
          <p id={`${uid}-subject-error`} role="alert" className="mt-1.5 text-xs text-red-400">
            {fieldErrors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="mb-8">
        <label htmlFor={`${uid}-message`} className={labelClass}>
          Message <span className="text-green-accent" aria-hidden="true">*</span>
        </label>
        <textarea
          id={`${uid}-message`}
          name="message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project — what you're building, your timeline, and how I can help..."
          required
          aria-required="true"
          aria-describedby={fieldErrors.message ? `${uid}-message-error` : undefined}
          aria-invalid={!!fieldErrors.message}
          className={`${inputClass} resize-y min-h-[120px] ${
            fieldErrors.message ? "border-red-500/60" : ""
          }`}
        />
        {fieldErrors.message && (
          <p id={`${uid}-message-error`} role="alert" className="mt-1.5 text-xs text-red-400">
            {fieldErrors.message}
          </p>
        )}
        <p className="mt-1.5 text-xs text-slate/60">
          {form.message.length} / 2000 characters
        </p>
      </div>

      <Button
        type="submit"
        variant="filled"
        disabled={status === "loading"}
        aria-label={status === "loading" ? "Sending message..." : "Send message"}
        className="w-full sm:w-auto"
      >
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
