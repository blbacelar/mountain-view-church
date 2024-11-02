import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import styles from "../../Map.module.css";
import L from "leaflet";

const MapComponent: React.FC = () => {
  const position: [number, number] = [51.0724374, -114.1652819];
  const mapRef = useRef<HTMLDivElement>(null);

  const customIcon = new Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  useEffect(() => {
    // Don't initialize if map already exists or if ref is null
    const element = mapRef.current;
    if (!element) return;

    // Initialize the map using the HTML element
    const map = L.map(element).setView(position, 15);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add marker
    const marker = L.marker(position, { icon: customIcon }).addTo(map);
    marker
      .bindPopup("Mountain View Adventist Church<br />5003 16th Avenue NW")
      .openPopup();

    return () => {
      // Cleanup on unmount
      map.remove();
    };
  }, [position]);

  return (
    <div
      className={styles.map}
      ref={mapRef}
      style={{ height: "100%", width: "100%" }}
    />
  );
};

export default MapComponent;
