"use client";
import dynamic from "next/dynamic";

// Dynamically import the Map component to avoid SSR issues
export const MapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] bg-slate-700 rounded-lg flex items-center justify-center">
      <div className="text-white">Loading map...</div>
    </div>
  ),
});

const Location = () => {
  // const address = "5003 16th Avenue NW, Calgary, AB T3B 0N2";

  return (
    <section className="py-16 px-4 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Join Us In Person
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-gray-200">
            <h3 className="text-xl font-semibold mb-4">Location Details</h3>
            <address className="not-italic">
              <p className="mb-2">Mountain View Adventist Church</p>
              <p className="mb-2">5003 16th Avenue NW</p>
              <p className="mb-4">Calgary, AB T3B 0N2</p>
            </address>

            <div className="mt-4 space-y-2">
              <a
                href="https://maps.google.com/?q=5003+16th+Avenue+NW+Calgary"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-500 text-slate-900 px-6 py-2 rounded-lg mr-4"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">Getting Here:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Close to TransCanada Highway</li>
                <li>Bus routes: 1, 40</li>
                <li>Free parking available</li>
              </ul>
            </div>
          </div>

          <div className="h-[400px] rounded-lg overflow-hidden relative">
            <MapComponent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
