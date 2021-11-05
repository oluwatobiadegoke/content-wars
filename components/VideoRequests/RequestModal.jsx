import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import RequestInfo from "./RequestInfo";
import RequestUpload from "./RequestUpload";
import Preview from "./Preview";
import Acceptance from "./Acceptance";

const RequestModal = ({ closeModal, isOpen, name, time }) => {
  const [accept, setAccept] = useState(false);
  const [uploadSelected, setUploadSelected] = useState(false);
  const [upload, setUpload] = useState(null);
  const [inviteAccepted, setInviteAccepted] = useState(false);

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
              <Dialog.Overlay className="fixed inset-0 bg-black" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            {!accept ? (
              <RequestInfo
                name={name}
                time={time}
                closeModal={closeModal}
                setAccept={setAccept}
              />
            ) : uploadSelected ? (
              !inviteAccepted ? (
                <Preview
                  upload={upload}
                  setUpload={setUpload}
                  setUploadSelected={setUploadSelected}
                  setInviteAccepted={setInviteAccepted}
                />
              ) : (
                <Acceptance name={name} closeModal={closeModal} />
              )
            ) : (
              <RequestUpload
                upload={upload}
                setUpload={setUpload}
                setUploadSelected={setUploadSelected}
                closeModal={closeModal}
              />
            )}
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default RequestModal;
