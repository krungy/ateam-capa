import styled from 'styled-components';
import { Button } from '~components/base';
import { COLORS } from '~constants/index';
import type { ApiReturnType } from '~types/index';
interface ItemCardProp {
  requestInfo: ApiReturnType;
}

const ItemCard = ({ requestInfo, ...props }: ItemCardProp) => {
  const handleValueList = (list: string[]) => list.join(', ');

  return (
    <ItemCardContainer {...props}>
      <Title>{requestInfo.title}</Title>
      {requestInfo.status === '상담중' && (
        <InBusinessContainer>상담중</InBusinessContainer>
      )}
      <ClientText>{requestInfo.client}</ClientText>
      <DueText>{requestInfo.due}까지 납기</DueText>
      <Divider />
      <DetailContainer>
        <InfoContent>
          <Text>도면개수</Text>
          <InfoValueText>{requestInfo.count}개</InfoValueText>
        </InfoContent>
        <InfoContent>
          <Text>총 수량</Text>
          <InfoValueText>{requestInfo.amount}개</InfoValueText>
        </InfoContent>
        <InfoContent>
          <Text>가공방식</Text>
          <InfoValueText>{handleValueList(requestInfo.method)}</InfoValueText>
        </InfoContent>
        <InfoContent>
          <Text>재료</Text>
          <InfoValueText>{handleValueList(requestInfo.material)}</InfoValueText>
        </InfoContent>
      </DetailContainer>
      <ButtonContainer>
        <Button type="primary">요청 내역 보기</Button>
        <Button type="secondary">채팅하기</Button>
      </ButtonContainer>
    </ItemCardContainer>
  );
};

const ItemCardContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 24px 16px;
  max-width: 366px;
  min-width: 320px;
  height: 356px;
  border: 1px solid ${COLORS.grey_border};
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  :hover {
    box-shadow: 0 0 0 2px ${COLORS.blue} inset;
  }
  @media screen and (max-width: 767px) {
    height: 344px;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 4px;
`;

const InBusinessContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 8px;
  position: absolute;
  right: 16px;
  top: 24px;
  background: ${COLORS.white};
  border: 1px solid ${COLORS.orange};
  box-sizing: border-box;
  border-radius: 12px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.67;
  color: ${COLORS.orange};
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  min-width: 70px;
`;

const ClientText = styled(Text)`
  font-weight: 500;
`;

const DueText = styled(Text)`
  margin-top: 24px;
  color: ${COLORS.text_grey};
  @media screen and (max-width: 767px) {
    margin-top: 16px;
  }
`;

const InfoValueText = styled(Text)`
  font-weight: 700;
`;

const Divider = styled.hr`
  display: block;
  width: 100%;
  height: 1px;
  border: none;
  background-color: ${COLORS.grey_border};
  margin: 16px 0;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
`;

const InfoContent = styled.div`
  display: flex;
  flex: 1;
  gap: 32px;
`;

const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 24px;
  gap: 8px;
`;

export default ItemCard;
