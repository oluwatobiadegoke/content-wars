import Image from "next/image";
import { comments } from "../../../utils/liveComments";

const Chat = () => {
  return (
    <div className="w-full">
      <div className="h-12 bg-lightGrey-100 flex items-center justify-center text-lg mb-6 rounded">
        <p>Live Chat</p>
      </div>
      <div className="overflow-y-auto" style={{ height: "475px" }}>
        {comments.map((singleComment) => {
          const { id, name, avatar, comment } = singleComment;
          return (
            <div key={id} className="h-10 flex items-center text-sm mb-2">
              <div className="flex items-center justify-center h-10 w-10 overflow-hidden mr-4">
                <Image src={avatar} alt={name} height={40} width={40} />
              </div>
              <div className="flex-1">
                <span className="mr-2 font-bold">{name}:</span>
                <span>{comment}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Chat;
