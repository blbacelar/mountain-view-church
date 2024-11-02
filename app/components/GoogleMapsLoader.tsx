"use client";
import { useRef, useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export default function GoogleMapsLoader() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");

      // Example coordinates (CN Tower Toronto)
      const position = {
        lat: 43.6426,
        lng: -79.3871,
      };

      const mapOptions = {
        center: position,
        zoom: 17,
        mapId: "my-nextjs-map",
      };

      // Initialize the map
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      // Optional: Add a marker
      const { Marker } = await loader.importLibrary("marker");
      new Marker({
        map: map,
        position: position,
      });
    };

    initMap();
  }, []);

  return <div ref={mapRef} style={{ height: "600px" }} />;
}
