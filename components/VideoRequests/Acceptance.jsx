import Image from "next/image";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";

const Acceptance = ({ name, closeModal }) => {
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
      <div className="inline-block w-full max-w-md overflow-hidden text-left align-middle transition-all transform bg-transparent shadow-xl  text-white ">
        <div className="rounded-lg bg-deepGrey-100 pt-12 px-16 text-center pb-8">
          <p className="mb-10 text-appYellow-100 text-xl">Invite accepted</p>
          <p>You accepted the content war request from</p>
          <div className="flex gap-2 items-center justify-center my-1">
            <div>
              <Image
                src="/public/commentavatar.png"
                alt={name}
                height={40}
                width={40}
              />
            </div>
            <p className="font-bold text-lg">{name}</p>
          </div>
          <p>Make sure to check your calendar to see your pairing.</p>
          <div className="flex justify-center mt-4">
            <button className="text-appYellow-100" onClick={() => closeModal()}>
              close
            </button>
          </div>
        </div>
      </div>
    </Transition.Child>
  );
};

export default Acceptance;
