import React from "react";

const YouTubeVideo = () => {
  return (
    <section className="py-16 px-4 bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
          Join us as we explore these timeless teachings that continue to
          transform lives.
        </h2>
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/vD4QsqRnUNc"
            title="Mountain View Adventist Church"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className="mt-4 text-center text-yellow-500 font-semibold"></p>
      </div>
    </section>
  );
};

export default YouTubeVideo;
