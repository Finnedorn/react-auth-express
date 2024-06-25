import { Outlet } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar";
import Footer from "../Footer";
function Dashboard() {

  return (
    <>
      <DashboardNavbar/>
      <div className="main py-5">
        {/* Outlet è una componente di react router che funge da
         placeholder per estendere il layout stile laravel */}
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;