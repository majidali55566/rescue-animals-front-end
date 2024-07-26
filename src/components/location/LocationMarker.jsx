/* eslint-disable react/prop-types */
import { useEffect, useRef, useState, useCallback } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { GpsFixedOutlined } from "@mui/icons-material";

const mapContainerStyle = { width: "100%", height: "400px" };
const defaultCenter = { lat: 20.5937, lng: 78.9629 };

function LocationMarker({ caseLocation }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, // Ensure this is set
    libraries: ["places"],
    loading: "async",
  });

  const [center, setCenter] = useState(caseLocation || defaultCenter);
  const mapRef = useRef();
  const mapInstanceRef = useRef(null); // Reference to the Google Map instance for panTo
  const [directionsResponse, setDirectionsResponse] = useState(null);

  async function calculateRoute() {
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: { lat: 27.54534, lng: 68.76278 },
      destination: { lat: 27.53457, lng: 68.75948 },
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    console.log("distance:" + results.routes[0].legs[0].distance.text);
    console.log("duration:" + results.routes[0].legs[0].distance.text);
    setdistance(results.routes[0].legs[0].distance.text);
    setdistance(results.routes[0].legs[0].duration.text);
  }

  // Handle map load
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
    mapInstanceRef.current = map; // Set the map instance for panTo
  }, []);

  // Center map to the default location if provided
  useEffect(() => {
    if (caseLocation) {
      setCenter(caseLocation);
    }
  }, [caseLocation]);

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
        center={center}
        onLoad={onMapLoad}
      >
        {<Marker position={handlePanToCenter} />}
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}

        <GpsFixedOutlined
          onClick={calculateRoute}
          style={{
            color: "black",
            position: "absolute",
            right: "1.2rem",
            bottom: "8.5rem",
            cursor: "pointer",
            zIndex: "9999999",
          }}
        />
      </GoogleMap>
      {caseLocation && (
        <p className="fw-bold">
          Location of case: {caseLocation.lat.toFixed(5)},{" "}
          {caseLocation.lng.toFixed(5)}
        </p>
      )}
    </div>
  );
}

export default LocationMarker;
