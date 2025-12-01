import React from "react";
import { Helmet } from "react-helmet";

const Terms = () => {
  return (
    <div className="min-h-screen bg-base-200 px-4 py-10">
      <Helmet>
        <title>Terms & Conditions - ToyVille</title>
      </Helmet>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Terms & Conditions</h1>

        <p className="mb-4">
          Welcome to <strong>ToyVille</strong>. By accessing or using our website,
          you agree to comply with these terms and conditions.
        </p>

        <h2 className="text-xl font-semibold mb-2">1. Use of Website</h2>
        <p className="mb-4">
          You must be at least 13 years old to use this website. Do not misuse the
          website or attempt to access unauthorized areas.
        </p>

        <h2 className="text-xl font-semibold mb-2">2. Product Information</h2>
        <p className="mb-4">
          We strive to provide accurate product information, but we cannot guarantee
          all details are error-free. Prices and availability may change without
          notice.
        </p>

        <h2 className="text-xl font-semibold mb-2">3. User Accounts</h2>
        <p className="mb-4">
          You are responsible for maintaining the confidentiality of your account
          credentials. Notify us immediately of any unauthorized use of your account.
        </p>

        <h2 className="text-xl font-semibold mb-2">4. Limitation of Liability</h2>
        <p className="mb-4">
          ToyVille is not responsible for any direct or indirect loss arising from
          the use of the website.
        </p>

        <h2 className="text-xl font-semibold mb-2">5. Intellectual Property</h2>
        <p className="mb-4">
          All content, images, and designs on ToyVille are owned by ToyVille and
          cannot be used without permission.
        </p>

        <h2 className="text-xl font-semibold mb-2">6. Changes to Terms</h2>
        <p className="mb-4">
          We may update these terms at any time. Continued use of the website
          implies acceptance of the changes.
        </p>

        <p className="text-gray-500 text-sm mt-8 text-center">
          &copy; {new Date().getFullYear()} ToyVille. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Terms;
