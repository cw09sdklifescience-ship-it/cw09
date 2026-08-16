"use client";

import { FormEvent, useState } from "react";
import {
  Building2,
  CheckCircle2,
  Mail,
  MessageSquare,
  Package,
  Phone,
  Send,
  User,
} from "lucide-react";

export default function EnquiryPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    enquiryType: "",
    product: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);

    // Connect API / Google Sheets here later
    console.log(formData);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white">

      {/* ================= FORM ================= */}
      <section className="px-4 pb-24 pt-16 sm:px-6 sm:pt-20">
        <div className="mx-auto max-w-3xl">

          {submitted ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center">

              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-green-600">
                <CheckCircle2 size={42} />
              </div>

              <h2 className="mt-6 text-2xl font-bold text-slate-900">
                Enquiry Submitted Successfully
              </h2>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                Thank you for contacting SDK Life Science.
                Our team will get back to you shortly.
              </p>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    company: "",
                    phone: "",
                    email: "",
                    enquiryType: "",
                    product: "",
                    message: "",
                  });
                }}
                className="mt-8 rounded-lg bg-[#0C4A6E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#38BDF8]"
              >
                Submit Another Enquiry
              </button>

            </div>
          ) : (
            <>
              {/* FORM TITLE */}
              <div className="mb-10 border-b border-slate-100 pb-8 text-center sm:text-left">
                <p className="text-xs font-bold uppercase tracking-[3px] text-[#38BDF8]">
                  Get In Touch
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0C4A6E] sm:text-4xl">
                  Send Us Your Enquiry
                </h2>

                <p className="mt-3 text-[15px] leading-relaxed text-slate-500">
                  Fill in the details below and our team will get back to you
                  within one business day.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-7">

                {/* ROW 1 */}
                <div className="grid gap-6 sm:grid-cols-2">

                  {/* NAME */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>

                    <div className="relative">
                      <User
                        size={17}
                        className="absolute left-0 top-1/2 -translate-y-1/2 text-[#0C4A6E]/40"
                      />

                      <input
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full border-0 border-b-2 border-slate-200 bg-transparent py-2.5 pl-7 pr-2 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#38BDF8]"
                      />
                    </div>
                  </div>

                  {/* COMPANY */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Company / Organization
                    </label>

                    <div className="relative">
                      <Building2
                        size={17}
                        className="absolute left-0 top-1/2 -translate-y-1/2 text-[#0C4A6E]/40"
                      />

                      <input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company name"
                        className="w-full border-0 border-b-2 border-slate-200 bg-transparent py-2.5 pl-7 pr-2 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#38BDF8]"
                      />
                    </div>
                  </div>

                  {/* PHONE */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Phone Number <span className="text-red-500">*</span>
                    </label>

                    <div className="relative">
                      <Phone
                        size={17}
                        className="absolute left-0 top-1/2 -translate-y-1/2 text-[#0C4A6E]/40"
                      />

                      <input
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full border-0 border-b-2 border-slate-200 bg-transparent py-2.5 pl-7 pr-2 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#38BDF8]"
                      />
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>

                    <div className="relative">
                      <Mail
                        size={17}
                        className="absolute left-0 top-1/2 -translate-y-1/2 text-[#0C4A6E]/40"
                      />

                      <input
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full border-0 border-b-2 border-slate-200 bg-transparent py-2.5 pl-7 pr-2 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#38BDF8]"
                      />
                    </div>
                  </div>

                </div>

                {/* ROW 2 */}
                <div className="grid gap-6 sm:grid-cols-2">

                  {/* ENQUIRY TYPE */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Enquiry Type <span className="text-red-500">*</span>
                    </label>

                    <select
                      name="enquiryType"
                      required
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className="w-full border-0 border-b-2 border-slate-200 bg-transparent py-2.5 text-sm text-slate-800 outline-none transition focus:border-[#38BDF8]"
                    >
                      <option value="">Select enquiry type</option>
                      <option value="Product Enquiry">
                        Product Enquiry
                      </option>
                      <option value="Distribution">
                        Distribution / Dealership
                      </option>
                      <option value="Business Partnership">
                        Business Partnership
                      </option>
                      <option value="Export">
                        Export Enquiry
                      </option>
                      <option value="General">
                        General Enquiry
                      </option>
                    </select>
                  </div>

                  {/* PRODUCT */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Product / Medicine
                    </label>

                    <div className="relative">
                      <Package
                        size={17}
                        className="absolute left-0 top-1/2 -translate-y-1/2 text-[#0C4A6E]/40"
                      />

                      <input
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        placeholder="Product name"
                        className="w-full border-0 border-b-2 border-slate-200 bg-transparent py-2.5 pl-7 pr-2 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#38BDF8]"
                      />
                    </div>
                  </div>

                </div>

                {/* MESSAGE */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Requirement / Message{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <div className="relative">
                    <MessageSquare
                      size={17}
                      className="absolute left-0 top-3 text-[#0C4A6E]/40"
                    />

                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirement..."
                      className="w-full resize-none border-0 border-b-2 border-slate-200 bg-transparent py-2.5 pl-7 pr-2 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#38BDF8]"
                    />
                  </div>
                </div>

                {/* SUBMIT */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0C4A6E] py-3.5 font-semibold text-white shadow-md shadow-[#0C4A6E]/20 transition hover:bg-[#38BDF8] disabled:opacity-60 sm:w-auto sm:px-10"
                  >
                    {loading ? (
                      <>
                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={17} />
                        Submit Enquiry
                      </>
                    )}
                  </button>
                </div>

              </form>
            </>
          )}

        </div>
      </section>
    </main>
  );
}