import { NavLink as NavLinkRouterD } from "react-router-dom";

export const NavLink = ({ to, children, ...props }) => {
  return (
    <NavLinkRouterD
      {...props}
      className={({ isActive }) => (isActive ? "active" : "noactive")}
      to={to}
    >
      {children}
    </NavLinkRouterD>
  );
};
