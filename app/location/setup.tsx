'use client';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

interface Props {
  lat: number;
  lng: number;
}

const containerStyle = {
  width: '100%',
  height: '500px',
};

export default function MapComponent({ lat, lng }: Props) {
  console.log(process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY+" *****")
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!, // Must be NEXT_PUBLIC_
  });

  const center = {
    lat,
    lng,
  };

  if (!isLoaded) return <p>Loading Map...</p>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
      <Marker position={center} />
    </GoogleMap>
  );
}
