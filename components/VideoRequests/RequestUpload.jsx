import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

import UploadForm from "./UploadForm";

const Upload = ({ closeModal, upload, setUpload, setUploadSelected }) => {
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
            src="/../public/cancel.png"
            width={35}
            height={35}
            alt="cancel"
            onClick={() => closeModal()}
          />
        </div>
        <div className="py-12 bg-lightGrey-100 rounded-2xl">
          <Dialog.Title as="h3" className="text-xl leading-6 text-center">
            Upload a picture or video
          </Dialog.Title>
          <div className="my-16 flex justify-center">
            <Image
              src="/../public/camera.svg"
              alt="camera"
              height={58.84}
              width={102.15}
            />
          </div>

          <div className="w-full flex justify-center">
            <UploadForm
              setUpload={setUpload}
              setUploadSelected={setUploadSelected}
            />
          </div>
        </div>
      </div>
    </Transition.Child>
  );
};

export default Upload;
