import { useState } from "react";
import Image from "next/image";
import ReactPlayer from "react-player/lazy";

import CommentInput from "./CommentInput";
import PostHead from "./PostHead";

const SinglePost = ({ post }) => {
  const [viewAllComments, setViewAllComments] = useState(false);

  const {
    category,
    timestamp,
    content: { words, source, type },
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
        {type === "Image" ? (
          <Image src={source} width={896} height={337} alt={source} />
        ) : (
          <div className="relative" style={{ paddingTop: "56.25%" }}>
            <ReactPlayer
              className="absolute top-0 left-0"
              url={source}
              width="100%"
              height="100%"
              alt={source}
              volume={0.5}
              playing={true}
              muted={true}
              loop={true}
              controls
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload",
                  },
                },
              }}
            />
          </div>
        )}
      </div>
      <div className="flex items-center mx-6 gap-3 mb-4">
        <Image src="/heart.svg" width={24} height={24} alt={source} />
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
      {comments.length > 2 &&
        (viewAllComments ? (
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
        ))}
      <CommentInput />
    </div>
  );
};

export default SinglePost;
