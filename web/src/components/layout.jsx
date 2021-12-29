import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useSanity } from '../hooks';
import { Footer, Header, CallBtn } from '.';
import './layout.css';

const GlobalStyles = styled.div`
  h2 {
    color: ${(props) => props.$h2Color};
  }
  h3 {
    color: ${(props) => props.$h3Color};
  }
  h4 {
    color: ${(props) => props.$h4Color};
  }
  h5 {
    color: ${(props) => props.$h5Color};
  }
  h6 {
    color: ${(props) => props.$h6Color};
  }
  a {
    color: ${(props) => props.$linkColor};
    font-weight: bold;
    transition: all 0.25s;
    &:hover {
      color: ${(props) => props.$linkColorHover};
      transition: all 0.25s;
    }
  }
`;

const Layout = function ({ pageType, children }) {
  const { primary, secondary, accent, neutral, hero } = useSanity();

  switch (pageType) {
    case 'brand':
      return (
        <div>
          <Header />
          <GlobalStyles
            $linkColor={accent.default.color}
            $link$colorHover={accent.light.color}
            $h2Color={primary.dark.color}
            $h3Color={secondary.dark.color}
            $h4Color={neutral.dark.color}
            $h5Color={neutral.default.color}
            $h6Color={neutral.default.color}
          >
            <main>{children}</main>
          </GlobalStyles>
          <CallBtn />
          <Footer />
        </div>
      );
    case 'service':
      return (
        <div>
          <Header />
          <GlobalStyles
            $linkColor={accent.default.color}
            $link$colorHover={accent.light.color}
            $h2Color={primary.dark.color}
            $h3Color={secondary.dark.color}
            $h4Color={neutral.dark.color}
            $h5Color={neutral.default.color}
            $h6Color={neutral.default.color}
          >
            <main>{children}</main>
          </GlobalStyles>
          <CallBtn />
          <Footer />
        </div>
      );
    case 'location':
      return (
        <div>
          <Header />
          <GlobalStyles
            $linkColor={accent.default.color}
            $link$colorHover={accent.light.color}
            $h2Color={primary.dark.color}
            $h3Color={secondary.dark.color}
            $h4Color={neutral.dark.color}
            $h5Color={neutral.default.color}
            $h6Color={neutral.default.color}
          >
            <main>{children}</main>
          </GlobalStyles>
          <CallBtn />
          <Footer />
        </div>
      );
    case 'post':
      return (
        <div>
          <Header />
          <GlobalStyles
            $linkColor={accent.default.color}
            $link$colorHover={accent.light.color}
            $h2Color={primary.dark.color}
            $h3Color={secondary.dark.color}
            $h4Color={neutral.dark.color}
            $h5Color={neutral.default.color}
            $h6Color={neutral.default.color}
          >
            <main>{children}</main>
          </GlobalStyles>
          <CallBtn />
          <Footer />
        </div>
      );
    default:
      return (
        <div>
          <Header />
          <GlobalStyles
            $linkColor={accent.default.color}
            $link$colorHover={accent.light.color}
            $h2Color={primary.dark.color}
            $h3Color={secondary.dark.color}
            $h4Color={neutral.dark.color}
            $h5Color={neutral.default.color}
            $h6Color={neutral.default.color}
          >
            <main>{children}</main>
          </GlobalStyles>
          <CallBtn />
          <Footer />
        </div>
      );
  }
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
