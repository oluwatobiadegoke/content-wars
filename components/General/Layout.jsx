import { useState } from "react";
import UploadModal from "./Modals/UploadModal";

import MainNav from "./Navigator/MainNav";
import MobileNav from "./Navigator/MobileNav";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <main
      className="min-h-screen relative"
      style={{ backgroundColor: "#121212" }}
    >
      <UploadModal closeModal={closeModal} isOpen={isOpen} />
      <MainNav openModal={openModal} />
      {children}
      <MobileNav openModal={openModal} />
    </main>
  );
};

export default Layout;
