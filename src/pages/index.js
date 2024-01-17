import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import RoadQualityPanel from '@/components/RoadQualityPanel';
import LocateMeButton from '@/components/LocateMeButton';
import { roadQualityData } from '@/helpers/dummyData';
import { geolocationOptions, leafletOptions } from '../../app.config';

const Map = dynamic(() => import('@/components/Map'), {
  ssr: false
});

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [navigatorIsReady, setNavigatorIsReady] = useState(false);
  const [pinPoint, setPinPoint] = useState();
  const [focusLocation, setFocusLocation] = useState();

  useEffect(() => {
    setNavigatorIsReady(true);
  }, []);

  useEffect(() => {
    if (navigatorIsReady) {
      navigator.geolocation.getCurrentPosition(handleGeolocationSuccess, handleGeolocationError, geolocationOptions);
    }
  }, [navigatorIsReady]);

  const handleGeolocationSuccess = (data) => {
    const {latitude: userLatitude, longitude: userLongitude } = data.coords;
    setPinPoint([userLatitude, userLongitude]);
    setFocusLocation([userLatitude, userLongitude]);
    setLoading(false);
  };
  const handleGeolocationError = (e) => {
    setFocusLocation(leafletOptions.initialLocation)
    setLoading(false);
  }
  const handleChangeFocus = (location) => {
    setFocusLocation(location);
  };

  if (loading) {
    return null;
  }

  return (
    <main className="min-w-screen min-h-screen relative">
      <RoadQualityPanel
        handleClickAction={handleChangeFocus}
        roadQualityData={roadQualityData}
      />
      <Map 
        focusLocation={focusLocation}
        setFocusLocation={setFocusLocation}
        pinPoint={pinPoint}
        roadQualityData={roadQualityData}
        />
      <LocateMeButton
        pinPoint={pinPoint}
        setPinPoint={setPinPoint}
        setFocusLocation={setFocusLocation}
      />
    </main>
  )
}
export default Home;