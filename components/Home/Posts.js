import SinglePost from "./SinglePost";

const Posts = ({ posts }) => {
  return (
    <div className="max-w-4xl w-full mx-auto">
      {posts.map((post) => {
        return <SinglePost post={post} key={post.id} />;
      })}
    </div>
  );
};

export default Posts;
