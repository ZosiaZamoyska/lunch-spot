import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface MapProps {
  location: {
    name: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
}

const containerStyle = {
  width: '100%',
  height: '300px',
  borderRadius: '1rem',
  marginTop: '1rem'
};

const center = {
  lat: 36.3733, // KAIST main campus coordinates
  lng: 127.3624
};

const Map: React.FC<MapProps> = ({ location }) => {
  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location.coordinates}
        zoom={16}
      >
        <Marker
          position={location.coordinates}
          title={location.name}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map; 