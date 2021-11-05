import { useState } from "react";

import Layout from "../../components/General/Layout";
import InfluencerList from "../../components/Influencers/InfluencerList";
import InfluencerSearch from "../../components/Influencers/InfluencerSearch";
import { influencers } from "../../utils/Influencers";
import InfluencerModal from "../../components/Influencers/InfluencerModal";

const Influencers = () => {
  const [allInfluencers, setAllInfluencers] = useState(influencers);
  const [filteredInfluencers, setFilteredInfluencers] =
    useState(allInfluencers);
  const [date, setDate] = useState(new Date());
  const [selected, setSelected] = useState({
    id: 0,
    name: "",
    avatar: "",
    category: "",
    date: new Date(),
  });
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <Layout>
      <main className="text-white mt-4 mb-14 lg:mb-0">
        <InfluencerModal
          isOpen={isOpen}
          closeModal={closeModal}
          selected={selected}
          setSelected={setSelected}
        />
        <div className="relative max-w-xl w-full mx-auto">
          <div className="max-w-xl w-full mx-auto">
            <InfluencerSearch
              setFilteredInfluencers={setFilteredInfluencers}
              allInfluencers={allInfluencers}
            />
            <InfluencerList
              filteredInfluencers={filteredInfluencers}
              setSelected={setSelected}
              selected={selected}
              date={date}
            />
          </div>
          <div
            className="lg:fixed bottom-0 flex justify-center py-10"
            style={{ left: "calc(50% - 80px)" }}
          >
            <button
              className="bg-appYellow-100 w-40 h-11 rounded hover:bg-opacity-50 transition-all text-black"
              onClick={() => {
                if (!(selected.name.length > 0)) {
                  return;
                }
                openModal();
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Influencers;
