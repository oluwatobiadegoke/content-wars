import Schedule from "../../components/Calender/Schedule";
import Layout from "../../components/General/Layout";
import { schedules } from "../../utils/schedule";

const Calendar = () => {
  return (
    <Layout>
      <main>
        <div className="pb-24">
          <Schedule schedules={schedules} />
          <div className="flex justify-center mt-8">
            <button className="h-11 w-72 rounded bg-appYellow-100 text-black">
              CALL OUT
            </button>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Calendar;
