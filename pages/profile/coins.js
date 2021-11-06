import Link from "next/link";
import Layout from "../../components/General/Layout";

const Coins = () => {
  return (
    <Layout>
      <main>
        <div className="mt-8 w-full max-w-md mx-auto pt-10 pb-8 text-center rounded-2xl bg-deepGrey-100 text-white">
          <p className="text-appYellow-100 text-xl">Coins available</p>
          <p className="font-bold text-3xl mt-9">3.20978</p>
          <div className="flex justify-center mt-4">
            <button className="h-10 w-24 border border-appYellow-100 rounded-lg">
              Buy
            </button>
          </div>
          <Link href="/profile">
            <a className="block mt-12 text-appYellow-100 text-sm">close</a>
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export default Coins;
