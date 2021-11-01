import Layout from "../../components/General/Layout";
import Info from "../../components/Profile/Info";
import ProfileLinks from "../../components/Profile/ProfileLinks";

const Profile = () => {
  return (
    <Layout>
      <main className="text-white w-full">
        <div className="w-full lg:w-1/3 mx-auto">
          <Info />
          <ProfileLinks />
        </div>
      </main>
    </Layout>
  );
};

export default Profile;
