import Images from "../../components/Sponsor/Images";
import { MobileForm, PcForm } from "../../components/Sponsor/GetSponsors";

const Sponsor = () => {
  return (
    <main className="bg-deepGrey-100 min-h-screen">
      <div>
        <Images />
        <div className="mt-32 lg:mt-52 pt-4 pb-8">
          <p className="text-white text-xl font-bold mb-8 text-center">
            Apply to get sponsored
          </p>
          <div className="md:hidden py-8 mx-4 rounded bg-black">
            <MobileForm />
          </div>
          <div className="hidden md:block py-8 max-w-6xl w-full mx-auto bg-black rounded-lg">
            <PcForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Sponsor;
