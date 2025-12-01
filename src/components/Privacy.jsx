import React from "react";
import { Helmet } from "react-helmet";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-base-200 px-4 py-10">
      <Helmet>
        <title>Privacy Policy - ToyVille</title>
      </Helmet>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

        <p className="mb-4">
          At <strong>ToyVille</strong>, we value your privacy. This policy
          explains how we collect, use, and protect your personal information
          when you use our website.
        </p>

        <h2 className="text-xl font-semibold mb-2">
          1. Information Collection
        </h2>
        <p className="mb-4">
          We may collect personal information such as your name, email, and
          contact details when you register or use our services. We also collect
          non-personal information like browser type, pages visited, and IP
          address for analytics.
        </p>

        <h2 className="text-xl font-semibold mb-2">2. Use of Information</h2>
        <p className="mb-4">
          Your information is used to provide and improve our services,
          communicate with you, and personalize your experience on ToyVille.
        </p>

        <h2 className="text-xl font-semibold mb-2">3. Data Sharing</h2>
        <p className="mb-4">
          We do not sell or rent your personal information to third parties. We
          may share information with trusted service providers who assist us in
          running the website or providing services.
        </p>

        <h2 className="text-xl font-semibold mb-2">4. Security</h2>
        <p className="mb-4">
          We implement reasonable security measures to protect your data.
          However, no method of transmission over the Internet is 100% secure.
        </p>

        <h2 className="text-xl font-semibold mb-2">5. Cookies</h2>
        <p className="mb-4">
          We use cookies to enhance your browsing experience and track usage
          patterns. You can disable cookies in your browser settings, but some
          features may not function properly.
        </p>

        <h2 className="text-xl font-semibold mb-2">6. Changes to Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Continued use of
          our website implies acceptance of the changes.
        </p>

        <p className="text-gray-500 text-sm mt-8 text-center">
          &copy; {new Date().getFullYear()} ToyVille. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
