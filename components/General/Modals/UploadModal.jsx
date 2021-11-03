import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

import Upload from "./Upload";
import Preview from "./Preview";

const UploadModal = ({ closeModal, isOpen }) => {
  const [upload, setUpload] = useState(null);
  const [uploadSelected, setUploadSelected] = useState(false);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-3 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-80" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            {!uploadSelected ? (
              <Upload
                closeModal={closeModal}
                upload={upload}
                setUpload={setUpload}
                setUploadSelected={setUploadSelected}
              />
            ) : (
              <Preview upload={upload} />
            )}
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default UploadModal;
