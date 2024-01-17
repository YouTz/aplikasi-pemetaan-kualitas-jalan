import DataItem from "@/components/RoadQualityPanel/DataItem";

const RoadQualityPanel = (props) => {
    const { handleClickAction, roadQualityData } = props;
    return ( 
      <div className="z-[999] w-3/12 min-w-[480px] top-1/2 -translate-y-1/2 left-24 absolute">
        <div className="bg-white rounded-2xl shadow-2xl px-8 py-6 mb-4">
          <h1 className="font-bold text-3xl">Peta Kerusakan Jalan</h1>
          <span className="text-gray-400 text-sm font-semibold">Cari lokasi untuk mengecek kerusakan jalan</span>
          <input 
            className="mt-4 w-full border border-gray-300 p-2 rounded-lg text-sm outline-gray-400"
            placeholder="Cari lokasi..."
            type="text"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                alert('This feature is currently unavailable')
              } 
            }}
          />
        </div>
        <div className="h-[65vh] bg-white rounded-2xl shadow-2xl p-8">
          <table className="w-full border-separate border-spacing-y-[8px]">
            <thead>
              <tr className="min-w-100 text-gray-500 uppercase text-sm">
              <th className="text-center"></th>
                <th className="text-center">Latitude</th>
                <th className="text-center">Longitude</th>
                <th className="text-center">Amplitudo</th>
                <th className="text-center">Kualitas</th>
              </tr>
            </thead>
            <tbody className="before:content-['@'] before:block before:leading-[10px] before:text-transparent text-gray-800">
              {roadQualityData.map((data, index) => (
                <DataItem 
                  key={index}
                  handleClickAction={handleClickAction}
                  {...data}  
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

export default RoadQualityPanel;