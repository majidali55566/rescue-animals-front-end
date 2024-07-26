/* eslint-disable react/prop-types */
import { useState, useCallback, useRef, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { GpsFixedOutlined } from "@mui/icons-material";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "400px",
};
const defaultCenter = { lat: -34.397, lng: 150.644 };

function LocationSelector({ defaultLocation, onSelectLocation }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, // Ensure this is set
    libraries,
  });
  console.log(import.meta.env.VITE_GOOGLE_2);
  const [selected, setSelected] = useState(defaultLocation || null);
  const [center, setCenter] = useState(defaultCenter);
  const mapRef = useRef(); // Reference to the Google Map instance
  const mapInstanceRef = useRef(null); // Reference to the Google Map instance for panTo

  // Handle map clicks to update the selected location
  const onMapClick = useCallback(
    (event) => {
      const location = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };
      setSelected(location);
      onSelectLocation(location);
    },
    [onSelectLocation]
  );

  // Handle map load
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
    mapInstanceRef.current = map; // Set the map instance for panTo
  }, []);

  // Get current location using Geolocation API
  useEffect(() => {
    if (!defaultLocation) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const currentLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            setCenter(currentLocation);
            setSelected(currentLocation);
            onSelectLocation(currentLocation);
          },
          (error) => {
            console.error("Error getting current location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    }
  }, [defaultLocation, onSelectLocation]);

  // Handle panTo center when icon is clicked
  const handlePanToCenter = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.panTo(center);
    } else {
      console.error("Map instance is not available.");
    }
  };

  if (loadError) return <div>Error loading maps: {loadError.message}</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div style={{ position: "relative" }}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={selected || center}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
      <GpsFixedOutlined
        onClick={handlePanToCenter}
        style={{
          color: "white",
          position: "absolute",
          right: " 1.2rem",
          bottom: " 8.5rem",
          cursor: "pointer",
        }}
      />
      {selected && (
        <p className="fw-bold">
          Selected Location: {selected.lat.toFixed(5)},{" "}
          {selected.lng.toFixed(5)}
        </p>
      )}
    </div>
  );
}

export default LocationSelector;
