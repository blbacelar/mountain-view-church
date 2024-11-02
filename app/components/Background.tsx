import React from "react";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/jesus-silhouette.jpg')`,
          filter: "brightness(0.3)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-800/90" />
    </div>
  );
};

export default Background;
