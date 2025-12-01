import React, { useState } from "react";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    if (!name || !email || !message) {
      alert("Please fill all fields!");
      return;
    }

    // Temporary success alert (replace with API / Firebase / email sending)
    setSuccess(true);
    e.target.reset();
  };

  return (
    <div className="py-10 px-6 md:px-32 ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us - ToyVille</title>
        <link rel="canonical" href="http://mysite.com/contact" />
      </Helmet>

      {/* Heading */}
      <h1 className="text-center font-bold text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-400 mb-2">
        Contact Us
      </h1>
      <p className="text-center text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            We'd love to hear from you! Reach out to us with any questions,
            feedback, or suggestions.
          </p>

      <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-12">
        {/* Contact Info */}
        <div className="flex-1 space-y-4 text-gray-700 text-lg md:text-xl">
          
          <p>
            <span className="font-semibold">Email:</span>{" "}
            support@toyville.com
          </p>
          <p>
            <span className="font-semibold">Phone:</span> +880 1234 567890
          </p>
          <p>
            <span className="font-semibold">Address:</span> 123 Toy Street,
            Dhaka, Bangladesh
          </p>
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg space-y-4"
          >
            {success && (
              <p className="text-green-600 font-semibold">
                Message sent successfully!
              </p>
            )}
            <div>
              <label className="block mb-1 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Message</label>
              <textarea
                name="message"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn-default text-white font-semibold py-2 px-4 rounded-lg w-full transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
