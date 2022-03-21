import React from 'react';
import styled from 'styled-components';

const DefaultContainer = () => {
  return <Container>조건에 맞는 견적 요청이 없습니다.</Container>;
};

const Container = styled.div`
  padding: 40px 0;
  width: 100%;
  color: #939fa5;
  font-weight: 400;
  text-align: center;
  word-break: keep-all;
  border: 1px solid #c2c2c2;
  border-radius: 4px;
`;

export default DefaultContainer;
