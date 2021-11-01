import Layout from "../../components/General/Layout";
import Info from "../../components/Profile/Info";
import ProfileLinks from "../../components/Profile/ProfileLinks";

const Profile = () => {
  return (
    <Layout>
      <main className="text-white w-full px-3 lg:px-6">
        <div className="w-full lg:w-1/3 lg:mx-auto">
          <Info />
          <ProfileLinks />
        </div>
      </main>
    </Layout>
  );
};

export default Profile;
