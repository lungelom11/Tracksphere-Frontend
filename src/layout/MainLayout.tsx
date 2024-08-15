import {Outlet} from "react-router-dom"
import Sidebar from "../components/Sidebar/Sidebar"
import Header from "../components/Header/Header"
import "./mainlayout.css"
import { useState } from "react"
import { FaHouseUser,FaWallet,FaFlag,FaFutbol} from "react-icons/fa6";
import { MdOutlineWaterfallChart } from "react-icons/md";

const MainLayout = () => {
  const [isActive, setIsActive] = useState(false);
  const navigationLinks = [
    {
      href: "/" ,
      iconClass: <FaHouseUser />,
      text: "Home",
    },
    {
      href: "/finances",
      iconClass: <FaWallet />,
      text: "Finances",
    },
    {
      href: "/betway",
      iconClass: <FaFlag />,
      text: "Betway",
    },
    {
      href: "/fpl",
      iconClass: <FaFutbol />,
      text: "FPL",
    },
    {
      href: "/forex",
      iconClass: <MdOutlineWaterfallChart />,
      text: "Forex",
    },
  ];
  return (
    <>
        <Header />
        <div className="main-layout-container">
          <div className="sidebar-container">
          <Sidebar isActive={isActive} setIsActive={setIsActive} navigationLinks ={navigationLinks} />
          </div>
          <div className="main-content-container">
            <Outlet />
          </div>
        </div>
    </>
  )
}

export default MainLayout