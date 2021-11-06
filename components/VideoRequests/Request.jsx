import { useState } from "react";
import Image from "next/image";
import RequestModal from "./RequestModal";

const Request = ({ request }) => {
  const { type, name, time } = request;
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex gap-4 mb-7">
      <RequestModal
        closeModal={closeModal}
        isOpen={isOpen}
        name={name}
        time={time}
      />
      <div>
        <Image
          src="/public/commentavatar.png"
          alt={name}
          height={40}
          width={40}
        />
      </div>
      <div className="flex flex-1 flex-col items-start gap-4">
        <span>
          {name}{" "}
          {`${
            type !== "acceptance"
              ? "wants to go on a content war with you."
              : "just accepted your content war request."
          }`}
        </span>
        {type !== "acceptance" ? (
          <button
            onClick={() => openModal()}
            className="bg-appYellow-100 py-1 px-5 rounded text-black hover:bg-opacity-50 transition-all"
          >
            View
          </button>
        ) : (
          <button className="bg-appYellow-100 py-1 px-5 rounded text-black hover:bg-opacity-50 transition-all">
            Check Calender
          </button>
        )}
      </div>
    </div>
  );
};

export default Request;
