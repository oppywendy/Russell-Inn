import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import ScrollToTop from "../component/ScrollToTop";

const Layout = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
