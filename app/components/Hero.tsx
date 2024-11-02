import React from "react";

const Hero = () => {
  return (
    <section className="h-screen relative flex items-center justify-center">
      <div className="hero-background" />
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          The Radical Teachings of Jesus
        </h1>
        <p className="text-xl md:text-2xl mb-8 bg-black/50 p-4 rounded-lg">
          Join us to explore the timeless messages of love, forgiveness, and
          hope
        </p>
        <a
          href="#contact-form"
          className="bg-yellow-500 hover:bg-yellow-400 transition-colors text-slate-900 px-8 py-3 rounded-lg inline-block"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default Hero;
