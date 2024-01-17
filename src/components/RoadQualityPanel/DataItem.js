import Image from "next/image";
import { roadQuality } from "@/helpers/constants";

const stylingAttribsEnum = {
    [roadQuality.GOOD]: {
        bgColor: 'bg-green-50',
        icon: '/icons/success.svg',
        iconColor: 'bg-green-500',
    },
    [roadQuality.FAIR]: {
        bgColor: 'bg-yellow-50',
        icon: '/icons/warning.svg',
        iconColor: 'bg-yellow-500',
    },
    [roadQuality.DAMAGED]: {
        bgColor: 'bg-orange-50',
        icon: '/icons/warning.svg',
        iconColor: 'bg-orange-500',
    },
    [roadQuality.SEVERELY_DAMAGED]: {
        bgColor: 'bg-red-50',
        icon: '/icons/warning.svg',
        iconColor: 'bg-red-500',
    },
    [roadQuality.POTHOLED]: {
        bgColor: 'bg-gray-200',
        icon: '/icons/warning.svg',
        iconColor: 'bg-gray-900',
    },
};

const DataItem = (props) => {
    const { latitude, longitude, amplitudo, quality, handleClickAction } = props;
    const stylingAttribs = stylingAttribsEnum[quality];

    return (
            <tr className={`py-4 rounded-lg text-md mb-2 ${stylingAttribs.bgColor} text-center font-semibold`}>
                <td className="py-4">
                    <Image
                        src={stylingAttribs.icon}
                        alt="status"
                        width={20}
                        height={20}
                        className={`${stylingAttribs.iconColor} p-1 rounded-full ml-2 mr-1`}
                    />
                </td>
                <td className="py-4">{latitude}</td>
                <td className="py-4">{longitude}</td>
                <td className="py-4">{amplitudo}</td>
                <td className="py-4">{quality}</td>
                <td className="py-4">
                    <Image
                        src="/icons/arrow.svg"
                        alt="location"
                        width={20}
                        height={20}
                        className="bg-gray-600 p-1 mx-1 rounded-full cursor-pointer -rotate-[45deg] cursor-pointer"
                        onClick={() => { handleClickAction([latitude, longitude]) }}
                    />
                </td>
            </tr>
    );
  };

export default DataItem;