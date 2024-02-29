import { AiOutlineHome } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const NavigationButton = ({ to, icon, label }) => {
  return (
    <NavLink to={to} activeClassName="active" className="nav-button " exact>
      {icon}
      <span className="btm-nav-label">{label}</span>
    </NavLink>
  );
};

const BottomNav = () => {
  return (
    <>
      <div className="btm-nav max-w-2xl mx-auto">
        <NavigationButton
          to="/mainpage"
          icon={<AiOutlineHome />}
          label="Home"
        />
        <NavigationButton
          to="/orders"
          icon={<FaCartArrowDown />}
          label="Orders"
        />
        <NavigationButton to="/tasks" icon={<FaTasks />} label="Tasks" />
        <NavigationButton
          to="/service"
          icon={<IoChatboxEllipsesOutline />}
          label="Service"
        />
        <NavigationButton to="/profile" icon={<CgProfile />} label="Profile" />
      </div>
    </>
  );
};

export default BottomNav;
