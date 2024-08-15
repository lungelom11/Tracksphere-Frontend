import React, { useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";

// Define the types for your props
interface NavigationLink {
  href: string;
  text: string;
  iconClass: React.ReactNode;
  count?: number;
}

interface SidebarProps {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  navigationLinks: NavigationLink[];
}

const Sidebar: React.FC<SidebarProps> = ({ isActive, setIsActive, navigationLinks }) => {
  const location = useLocation();

  const handleIconClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsActive(window.innerWidth < 768);
    };

    // Set initial state based on the current window width
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsActive]);

  return (
    <aside className={isActive ? "sidebar-container active" : "sidebar-container"}>
      <div className="responsive-icon" onClick={handleIconClick}>
        {isActive ? <FaAngleRight /> : <FaAngleLeft />}
      </div>
      <div className="sidebar">
        <ul>
          {navigationLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.href}
                className={location.pathname === link.href ? "active-page" : ""}
              >
                <span className="icon">{link.iconClass}</span>
                <span className="item">{link.text}</span>
                {link.count && <span className="count">{link.count}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
