import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/clapperboard1.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

import {
  Wrapper,
  Content,
  LogoImg,
  TMDBLogoImg,
  Text,
  LeftLogo,
} from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <LeftLogo>
          <LogoImg src={Logo} alt="logo" />
          <Text>
            <h3>React Movie</h3>
          </Text>
        </LeftLogo>
      </Link>

      <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
    </Content>
  </Wrapper>
);

export default Header;
