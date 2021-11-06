import Image from "next/image";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";

const Preview = ({
  upload,
  setUpload,
  setUploadSelected,
  setInviteAccepted,
}) => {
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
      <div className="inline-block w-full max-w-md overflow-hidden text-left align-middle transition-all transform bg-transparent shadow-xl  text-white">
        <div className="flex justify-end mb-8 cursor-pointer">
          <Image
            src="/public/cancel.png"
            width={35}
            height={35}
            alt="cancel"
            onClick={() => closeModal()}
          />
        </div>
        <div className="pt-36 px-16 pb-28 bg-deepGrey-100 rounded-lg">
          <div className="w-72 h-11 flex items-center justify-center rounded border border-appYellow-100 border-dashed mb-4 mx-auto">
            <p>{upload?.name}</p>
          </div>
          <div className="w-full flex justify-center">
            <span
              className="text-appYellow-100 text-xs text-center cursor-pointer"
              onClick={() => {
                setUploadSelected(false);
                setUpload(null);
              }}
            >
              Remove
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="py-2 px-11 bg-appYellow-100 text-black hover:bg-opacity-50 transition-all rounded mt-1"
            onClick={() => setInviteAccepted(true)}
          >
            Continue
          </button>
        </div>
      </div>
    </Transition.Child>
  );
};

export default Preview;
