import GoogleMapReact from "google-map-react";

const Map = ({ center, zoom }) => {
  return (
    <div witdh="600px" height="300px" position="relative">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAjJlMbAjxsCK0Ugk0sQ0mavbVImOOFlwU" }}
        defaultCenter={center}
        defaultZoom={zoom}
      ></GoogleMapReact>
    </div>
  );
};
Map.defaultProps = {
  center: { lat: -38.416097, lng: -63.616672 },
  zoom: 6,
};

export default Map;
