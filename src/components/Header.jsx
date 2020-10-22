import React from "react";
import { Menu, Image, Container } from "semantic-ui-react";

const Header = () => {
  return (
    <Menu inverted>
      <Image
        size="small"
        data-cy="header"
        src="https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg"
        alt="logo"
      />
    </Menu>
  );
};

export default Header;
