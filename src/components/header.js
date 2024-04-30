import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderTitle = styled.div`
  color: red;
`;

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <HeaderTitle>- 헤더 스타일드 컴포넌트-</HeaderTitle>
    <Link
      to='/'
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      메인
    </Link>
  </header>
);

export default Header;
