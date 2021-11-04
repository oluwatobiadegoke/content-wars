import Layout from "../components/General/Layout";
import Posts from "../components/Home/Posts";

import { posts } from "../utils/posts";

export default function Home() {
  return (
    <Layout>
      <main className="text-white mt-4 pb-14 lg:pb-4">
        <Posts posts={posts} />
      </main>
    </Layout>
  );
}
