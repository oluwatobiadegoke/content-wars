import Layout from "../../components/General/Layout";
import Notifications from "../../components/VideoRequests/Notifications";
import { requests } from "../../utils/videorequests";

const VideoRequests = () => {
  return (
    <Layout>
      <main className="text-white">
        <div className="w-full px-4 lg:w-1/3 mx-auto mt-16 mb-14 lg:mb-0">
          <p className="text-lg text-center text-appYellow-100 mb-14">
            Video Requests
          </p>
          <Notifications requests={requests} />
        </div>
      </main>
    </Layout>
  );
};

export default VideoRequests;
