import Chat from "../../components/ContentWar/LiveChat/Chat";
import ChatInput from "../../components/ContentWar/LiveChat/ChatInput";
import CoinInput from "../../components/ContentWar/War/CoinInput";
import Media from "../../components/ContentWar/War/Media";
import Vote from "../../components/ContentWar/War/Vote";
import Layout from "../../components/General/Layout";

const ContentWar = () => {
  return (
    <Layout>
      <main className="text-white lg:grid lg:grid-cols-3 mt-6 pb-24 gap-4 rounded">
        <div className="lg:col-span-2">
          <Vote />
          <Media />
          <CoinInput />
        </div>
        <div className="mt-8 lg:mt-0">
          <Chat />
          <ChatInput />
        </div>
      </main>
    </Layout>
  );
};

export default ContentWar;
