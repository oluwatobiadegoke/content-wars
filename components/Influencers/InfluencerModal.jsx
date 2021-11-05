import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import InfluencerCalendar from "./InfluencerCalendar";
import SentInvite from "./SentInvite";

const InfluencerModal = ({ closeModal, isOpen, selected, setSelected }) => {
  const [dated, setDated] = useState(false);

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
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            {!dated ? (
              <InfluencerCalendar
                setSelected={setSelected}
                selected={selected}
                setDated={setDated}
              />
            ) : (
              <SentInvite
                selected={selected}
                setDated={setDated}
                closeModal={closeModal}
              />
            )}
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default InfluencerModal;
