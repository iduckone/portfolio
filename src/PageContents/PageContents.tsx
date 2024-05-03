import React from 'react';
import Career from './sections/Career/Career';
import PersonalInfo from './sections/PersonalInfo/PersonalInfo';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  margin: 0 auto;

  color: red;
  border: 1px solid red;
`;

export default function PageContents() {
  return (
    <Container>
      <PersonalInfo />
      <Career />
    </Container>
  );
}
