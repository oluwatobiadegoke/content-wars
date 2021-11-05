import Image from "next/image";

const InfluencerList = ({ filteredInfluencers, setSelected, selected }) => {
  return (
    <div className="px-4">
      {filteredInfluencers.map((influencer) => {
        const { id, name, avatar, category } = influencer;
        return (
          <div key={id} className="flex items-center mb-5">
            <div className="flex-1 flex gap-5">
              <div>
                <Image src={avatar} alt={name} width={48} height={48} />
              </div>
              <div className="flex flex-col gap-2">
                <p>{name}</p>
                <div
                  className="h-6 w-16 text-sm flex items-center justify-center rounded"
                  style={{
                    backgroundColor: `${
                      (category === "Beauty" && "#EF5DA8") ||
                      (category === "Fashion" && "#5D5FEF") ||
                      (category === "Music" && "#FFCA28")
                    }`,
                  }}
                >
                  <p>{category}</p>
                </div>
              </div>
            </div>
            <div
              className="w-5 h-5 rounded-full border border-appYellow-100 flex items-center justify-center cursor-pointer"
              onClick={() => {
                setSelected({ id, name, avatar, category, date: new Date() });
              }}
            >
              {selected.id === id && (
                <div className="w-3 h-3 bg-appYellow-100 rounded-full"></div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InfluencerList;
