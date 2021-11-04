import { useState } from "react";
import Image from "next/image";
import CommentInput from "./CommentInput";
import PostHead from "./PostHead";

const SinglePost = ({ post }) => {
  const [viewAllComments, setViewAllComments] = useState(false);

  const {
    category,
    timestamp,
    content: { words, image },
    user: { name, avatar },
    likes,
    comments,
  } = post;
  return (
    <div className="bg-deepGrey-100 rounded-lg py-4 mb-6">
      <PostHead
        name={name}
        avatar={avatar}
        timestamp={timestamp}
        category={category}
      />
      <p className="mx-4 mb-6">{words}</p>
      <div className="mb-5">
        <Image src={image} width={896} height={337} alt={image} />
      </div>
      <div className="flex items-center mx-6 gap-3 mb-4">
        <Image src="/../public/heart.svg" width={24} height={24} alt={image} />
        <p>
          {likes} <span>Likes</span>
        </p>
      </div>
      <div className="px-4">
        {comments.map((comment, index) => {
          return (
            <div
              key={comment.id}
              className={`${
                index > 1 ? (viewAllComments ? "flex" : "hidden") : "flex"
              } items-center h-11 mb-3 gap-3`}
            >
              <Image
                src={comment.avatar}
                width={44}
                height={44}
                alt={comment.avatar}
              />
              <div className="bg-lightGrey-100 flex items-center h-full px-2 text-sm rounded">
                <p>{comment.comment}</p>
              </div>
            </div>
          );
        })}
      </div>
      {viewAllComments ? (
        <p
          className="text-sm pl-4 mb-3 cursor-pointer"
          onClick={() => setViewAllComments(false)}
        >
          View less comments
        </p>
      ) : (
        <p
          className="text-sm pl-4 mb-3 cursor-pointer"
          onClick={() => setViewAllComments(true)}
        >
          View all comments
        </p>
      )}
      <CommentInput />
    </div>
  );
};

export default SinglePost;
