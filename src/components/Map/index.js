import { useRef } from "react";
import { roadQuality } from "@/helpers/constants";
import { MapContainer, TileLayer, useMap, Marker, CircleMarker, Tooltip } from 'react-leaflet'
import Image from "next/image";
import { leafletOptions } from "../../../app.config";
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";

const colorEnum = {
  [roadQuality.GOOD]: 'green',
  [roadQuality.FAIR]: 'yellow',
  [roadQuality.DAMAGED]: 'orange',
  [roadQuality.SEVERELY_DAMAGED]: 'brown',
  [roadQuality.POTHOLED]: 'black',
} 

const Map = (props) => {
  const { focusLocation, pinPoint, roadQualityData } = props;
  const mapRef = useRef(null);

  const RecenterAutomatically = ({latitude, longitude}) => {
    const map = useMap();
    map.setView([latitude, longitude]);
    return null;
  }

  return ( 
    <MapContainer 
      zoomControl={leafletOptions.zoomControl}
      center={focusLocation}
      zoom={leafletOptions.initialZoom}
      ref={mapRef}
      style={{height: "100vh", width: "100vw"}}
    >
      <TileLayer attribution={leafletOptions.tileLayer.attribution} url={leafletOptions.tileLayer.url} />
      {roadQualityData.map((data, index) => {
        const { latitude, longitude, amplitudo, quality } = data;
        const color = colorEnum[quality];

        return (
          <CircleMarker
            key={index}
            center={[latitude, longitude]}
            pathOptions={{ color }} 
            radius={25}
          >
            <Tooltip direction={'top'} offset={[0, -36]} opacity={0.9}>
              <div className="flex gap-2 w-full">
              <div className="bg-gray-200 flex flex-1 flex-col items-center gap-2 px-2 py-3 rounded-md">
                  <div className="w-[40px] h-[40px] flex items-center justify-center bg-white rounded-full">
                    <Image
                      src="/icons/gps.svg"
                      alt="location"
                      width={32}
                      height={32}
                    />
                  </div>
                  <p className="text-[15px] font-bold">{latitude}, {longitude}</p>
                </div>
                <div className="bg-gray-200 flex flex-1 flex-col items-center gap-2 px-2 py-3 rounded-md">
                  <div className="w-[40px] h-[40px] flex items-center justify-center bg-white rounded-full">
                    <Image
                      src="/icons/amplitudo.svg"
                      alt="amplitudo"
                      width={36}
                      height={36}
                    />
                  </div>
                  <p className="text-[15px] font-bold">{amplitudo}</p>
                </div>
              </div>
              <p className="text-[16px] text-center font-bold mt-4">Kondisi Jalan {quality}</p>
            </Tooltip>
          </CircleMarker>
        );
      })}
      <RecenterAutomatically latitude={focusLocation[0]} longitude={focusLocation[1]} />
      { pinPoint && <Marker position={pinPoint} /> }
    </MapContainer>
  );
};

export default Map;