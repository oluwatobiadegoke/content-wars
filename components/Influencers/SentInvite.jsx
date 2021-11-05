import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";

const SentInvite = ({ selected, setDated, closeModal }) => {
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
      <div className="inline-block w-full max-w-xl h-full overflow-hidden text-center text-white align-middle transition-all transform bg-deepGrey-100 shadow-xl rounded-2xl">
        <div className="mx-16">
          <p className="text-appYellow-100 text-xl text-center mt-12 mb-4">
            Invite Sent
          </p>
          <p className="mb-7">
            Your invite to {selected.name} has been sent. You would be notified
            if the influencer accepts or rejects your invitation.{" "}
          </p>
          <p>
            You scheduled the content war for{" "}
            <span className="font-bold">
              {selected.date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </p>
          <p className="mb-6">
            Make sure to check your calendar to see your pairing.
          </p>
          <div className="mb-8 flex justify-center">
            <button
              className="text-xs bg-transparent outline-none border-none text-appYellow-100"
              onClick={() => {
                closeModal();
                setInterval(() => {
                  setDated(false);
                }, 1500);
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Transition.Child>
  );
};

export default SentInvite;
