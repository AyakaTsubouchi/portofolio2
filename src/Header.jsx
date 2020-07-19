import React from "react";
import "materialize-css";
import { SideNav, Icon, SideNavItem } from "react-materialize";

const Header = () => {
  return (
    <>
      <SideNav
        id="SideNav-10"
        options={{
          draggable: true,
        }}
        trigger={<Icon className="menu-icon">menu</Icon>}>
        <SideNavItem
          user={{
            background: "https://placeimg.com/640/480/tech",
            email: "jdandturk@gmail.com",
            image: "static/media/react-materialize-logo.824c6ea3.svg",
            name: "John Doe",
          }}
          userView
        />
        <SideNavItem href="#!icon" icon={<Icon>cloud</Icon>}>
          First Link With Icon
        </SideNavItem>
        <SideNavItem href="#!second">Second Link</SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>Subheader</SideNavItem>
        <SideNavItem href="#!third" waves>
          Third Link With Waves
        </SideNavItem>
      </SideNav>
    </>
  );
};
export default Header;
