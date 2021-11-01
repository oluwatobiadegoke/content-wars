import Image from "next/image";

import Layout from "../../components/General/Layout";
import Scroll from "../../components/General/Scroll";
import { notifications } from "../../utils/notification";

const Notifications = () => {
  return (
    <Layout>
      <main
        className="text-white w-full px-3 lg:px-6 flex items-center"
        style={{ height: "calc(100vh - 96px)" }}
      >
        <div
          className="mb-20 lg:mb-0 relative overflow-y-scroll w-full lg:w-1/3 lg:mx-auto bg-deepGrey-100 rounded"
          style={{ height: "calc(100vh - 192px)" }}
        >
          <div className="bg-deepGrey-100 h-20 flex justify-center items-center sticky top-0 w-full z-50">
            <h1 className="text-appYellow-100">Notifications</h1>
          </div>
          <Scroll>
            <div className="px-4">
              {notifications.map((notification) => {
                const { id, image, message } = notification;
                return (
                  <div key={id} className="h-12 flex items-center gap-4 mb-6">
                    <div>
                      <Image src={image} width={48} height={48} alt={id} />
                    </div>
                    <p className="flex-1 text-sm">{message}</p>
                  </div>
                );
              })}
            </div>
          </Scroll>
          <div className="w-full sticky bottom-0 flex items-center justify-center h-16 bg-deepGrey-100 z-50">
            <button className="h-8 bg-appYellow-100 w-36 rounded text-black text-sm font-medium hover:bg-opacity-50 transition-all">
              Check calender
            </button>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Notifications;
