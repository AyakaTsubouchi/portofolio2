import React from "react";
import "materialize-css";
import { SideNav, Icon, SideNavItem } from "react-materialize";

const Header = () => {
  const Trigger = () => {
    return (
      <>
        <div className="my-menu">
          <Icon className="menu-icon">menu</Icon>
          <p className="menu-text">Aya's Portfolit</p>
        </div>
      </>
    );
  };

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
              <Trigger />
            </a>
          }>
          <SideNavItem href="#top" waves className="sidenav-item">
            Top
          </SideNavItem>
          <SideNavItem href="#about" waves className="sidenav-item">
            About
          </SideNavItem>
          <SideNavItem href="#works" waves className="sidenav-item">
            Works
          </SideNavItem>
          <SideNavItem href="#contact" waves className="sidenav-item">
            Contact
          </SideNavItem>
        </SideNav>
      </div>
    </>
  );
};
export default Header;
