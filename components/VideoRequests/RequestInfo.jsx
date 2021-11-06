import Image from "next/image";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";

const RequestInfo = ({ name, time, closeModal, setAccept }) => {
  return (
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div className="inline-block w-full max-w-md px-5 overflow-hidden text-center align-middle transition-all transform bg-deepGrey-100 shadow-xl text-white rounded-2xl">
        <div className="flex items-center justify-center mt-14 gap-2">
          <div>
            <Image
              src="/public/commentavatar.png"
              alt={name}
              height={40}
              width={40}
            />
          </div>
          <p className="text-lg font-bold">{name}</p>
        </div>
        <Link href="/">
          <a className="text-xs text-appYellow-100 mb-10 inline-block">
            View Profile
          </a>
        </Link>
        <p className="mb-4">
          This user scheduled a content war with you on {time}.
        </p>
        <p className="mb-6">
          Click accept if you would like to accept their request or reject if
          you would like decline and the influencer will be notified.
        </p>
        <div className="mb-5 flex justify-center gap-4">
          <button
            className="w-24 h-10 rounded text-black border border-appYellow-100 bg-appYellow-100"
            onClick={() => setAccept(true)}
          >
            Accept
          </button>
          <button
            className="w-24 h-10 rounded border border-appYellow-100 text-white"
            onClick={() => closeModal()}
          >
            Reject
          </button>
        </div>
      </div>
    </Transition.Child>
  );
};

export default RequestInfo;
