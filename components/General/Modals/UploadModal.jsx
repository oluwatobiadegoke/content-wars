import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const UploadModal = ({ closeModal, isOpen }) => {
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
                  <Dialog.Title
                    as="h3"
                    className="text-xl leading-6 text-center"
                  >
                    Upload your content
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
                    <form className="w-full flex justify-center">
                      <label
                        htmlFor="upload"
                        className="flex items-center justify-center max-w-xs w-full h-11 border-dashed border-appYellow-100 border rounded-lg cursor-pointer"
                      >
                        <p className="text-white">Upload</p>
                        <input
                          type="file"
                          name="upload"
                          id="upload"
                          className="hidden"
                        />
                      </label>
                    </form>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default UploadModal;
