import React from 'react';
import styled from 'styled-components';

import developerImage from './developerImage.png';

export default function PersonalInfo() {
  return (
    <Container>
      <div>이미지</div>
      <Img src={developerImage} alt='' />
      <div>
        <div>네임</div>
        <div>바</div>
        <div>프론트엔드</div>
      </div>
    </Container>
  );
}

const Container = styled.div``;

const Img = styled.img`
  width: 102px;
  height: 100vh;
`;
