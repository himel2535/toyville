import React from "react";
import { Helmet } from "react-helmet";
// import aboutImage from "../assets/about-us.jpg"; 

const AboutUs = () => {
  return (
    <div className="py-10 px-4 md:px-20 ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us - ToyVille</title>
        <link rel="canonical" href="http://mysite.com/about" />
      </Helmet>

      {/* Heading */}
      <h1 className="text-center font-bold text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-400 mb-2">
        About Us
      </h1>

      {/* Description + Image */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        {/* <div className="flex-1">
          <img
            src={aboutImage}
            alt="About Us"
            className="rounded-lg w-full object-cover shadow-lg"
          />
        </div> */}

        {/* Text */}
        <div className="flex-1">
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            Welcome to ToyVille! We are passionate about bringing joy and
            creativity to children of all ages. Our handpicked collection of
            toys is designed to inspire imagination, learning, and endless fun.
          </p>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            At ToyVille, quality and safety are our top priorities. We work
            closely with trusted sellers and brands to ensure every toy meets
            our high standards. Our mission is to make playtime exciting,
            educational, and memorable.
          </p>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Join our ToyVille family and explore a world full of colorful,
            creative, and engaging toys that children will love and cherish.
            Your child’s happiness and growth are our ultimate reward.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
