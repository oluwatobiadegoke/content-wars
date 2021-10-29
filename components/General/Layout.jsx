import MainNav from "./Navigator/MainNav";
import MobileNav from "./Navigator/MobileNav";

const Layout = (children) => {
  return (
    <main>
      <MainNav />
      {children}
      <MobileNav />
    </main>
  );
};

export default Layout;
