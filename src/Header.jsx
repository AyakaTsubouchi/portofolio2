import React from "react";
import "materialize-css";
import { SideNav, Icon, SideNavItem } from "react-materialize";

const Header = () => {
  return (
    <>
      <div>
        <style>
          {`
            #root > div > div {
              z-index: 99999 !important;
            }
          `}
        </style>
        <SideNav
          id="SideNav-10"
          options={{
            draggable: true,
          }}
          className="side-nav"
          trigger={
            <a>
              <Icon className="menu-icon">menu</Icon>
            </a>
          }>
          <SideNavItem href="#top" waves className="sidenav-item">
            Top
          </SideNavItem>
          <SideNavItem href="#about" waves className="sidenav-item">
            About
          </SideNavItem>

          <SideNavItem subheader></SideNavItem>
          <SideNavItem href="#works" waves>
            Works
          </SideNavItem>
          <SideNavItem subheader></SideNavItem>
          <SideNavItem href="#contact" waves>
            Contact
          </SideNavItem>
        </SideNav>
      </div>
    </>
  );
};
export default Header;
