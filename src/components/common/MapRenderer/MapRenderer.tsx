import { GoogleMap, Marker } from "@react-google-maps/api";
import { useState } from "react";
import { Title } from "../../../models/Title";

interface MapViewerProps {
  titleData: Title;
}
export const MapRenderer = ({ titleData }: MapViewerProps) => {
  const [showMarker, setShowMarker] = useState(false);
  return (
    <>
      {titleData && (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{
            fullscreenControl: false,
            clickableIcons: false,
            disableDefaultUI: false,
            streetViewControl: false,
            scaleControl: false,
            zoomControl: false,
            mapTypeControl: false,
            keyboardShortcuts: false,
          }}
          center={{
            lat: titleData.yCoordinate,
            lng: titleData.xCoordinate,
          }}
          zoom={15}
          onLoad={() => {
            setTimeout(() => setShowMarker(true));
          }}
        >
          {showMarker && (
            <Marker
              title="siteMarker"
              position={{
                lat: titleData.yCoordinate,
                lng: titleData.xCoordinate,
              }}
            />
          )}
        </GoogleMap>
      )}
    </>
  );
};

export default MapRenderer;
