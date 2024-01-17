import Image from "next/image";
import { geolocationOptions } from "../../../app.config";

const LocateMeButton = (props) => {
    const { setPinPoint, setFocusLocation } = props;
    const handleClick = () => {
        const handleGeolocationSuccess = (data) => {
            const { latitude: userLatitude, longitude: userLongitude } = data.coords;
            setFocusLocation([userLatitude, userLongitude]);
            setPinPoint([userLatitude, userLongitude])
        };
        const handleGeolocationError = (e) => {
            alert('Please allow location access');
        }
        navigator.geolocation.getCurrentPosition(handleGeolocationSuccess, handleGeolocationError, geolocationOptions);
    };

    return (
        <div 
            title="Menuju lokasi terkini"
            className="absolute rounded-full z-[999] bottom-[8vh] right-8 bg-white border-2 border-gray-500 shadow-2xl w-12 h-12 flex items-center justify-center cursor-pointer"
            onClick={handleClick}>
            <Image
                src='/icons/location.svg'
                alt="map"
                width={24}
                height={24}
            />
        </div>
    )
};

export default LocateMeButton;