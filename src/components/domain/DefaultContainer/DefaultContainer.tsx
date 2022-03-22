import React from 'react';
import styled from 'styled-components';
import { COLORS } from '~constants/index';

const DefaultContainer = () => {
  return <Container>조건에 맞는 견적 요청이 없습니다.</Container>;
};

const Container = styled.div`
  padding: 40px 0;
  width: 100%;
  color: ${COLORS.text_grey};
  font-weight: 400;
  text-align: center;
  word-break: keep-all;
  border: 1px solid ${COLORS.border};
  border-radius: 4px;
`;

export default DefaultContainer;
