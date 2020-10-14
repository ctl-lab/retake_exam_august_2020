import React from "react";
import { Menu } from "semantic-ui-react";

const Header = () => {
  return (
    <Menu inverted>
      <Menu.Item>
        <img data-cy="header" src="https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg" alt="logo"/>
      </Menu.Item>

    </Menu>
  );
};

export default Header;
