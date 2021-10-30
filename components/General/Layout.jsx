import MainNav from "./Navigator/MainNav";
import MobileNav from "./Navigator/MobileNav";

const Layout = ({ children }) => {
  return (
    <main className="bg-black min-h-screen relative">
      <MainNav />
      {children}
      <MobileNav />
    </main>
  );
};

export default Layout;
