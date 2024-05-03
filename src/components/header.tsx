import * as React from 'react';
import styled, { css } from 'styled-components';
import Text from './Text/Text';

interface StyledProps {
  scrolled: boolean;
}

const Container = styled.div<StyledProps>`
  margin-top: 2vw;
  width: 100%;
  position: fixed;
  top: 0;
  /* left: 20%; // 전체 너비에서 중앙 정렬을 위해 좌우 각각 20%씩 여백 */
  display: flex;
  justify-content: center;
  height: 5vw;
  align-items: center;
  transition: all 0.3s ease;

  ${(props) =>
    props.scrolled &&
    css`
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      background-color: rgba(255, 255, 255, 0.18);
      box-shadow: 0 2px 13px rgba(0, 0, 0, 0.2);
      border-radius: 4vw;
      height: 5vw;
    `}
`;

const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 0); // 스크롤 위치가 0이 아닐 때 true로 설정
  };

  // 컴포넌트 마운트시 이벤트 리스너 추가 및 언마운트시 제거
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const list = ['About', 'Career', 'Projects', 'Skills'];

  return (
    <Container scrolled={scrolled}>
      {list.map((item, index) => (
        <Text key={index} variant='h5'>
          {item}
        </Text>
      ))}
    </Container>
  );
};

export default Header;
