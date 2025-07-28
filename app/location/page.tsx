'use client';
import { useEffect, useState } from 'react';
import Map from './setup'
interface Position {
  lat: number;
  lng: number;
}

export default function LocationFetcher() {
  const [position, setPosition] = useState<Position | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const coords = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          };
          setPosition(coords);
        },
        (err) => {
          console.error('Geolocation error:', err);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div>
      {position ? (
        <div>
          Latitude: {position.lat}, Longitude: {position.lng}
          <Map lat={position.lat} lng={position.lng}/>
        </div>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
}
