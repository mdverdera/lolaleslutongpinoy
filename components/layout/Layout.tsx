import Navigation from "@components/layout/Navigation";
import Footer from "@components/layout/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
