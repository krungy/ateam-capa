import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { Toggle, Button } from '~components/base';
import {
  ItemCard,
  DefaultContainer,
  Navigation,
  Select,
} from '~components/domain';
import type {
  ApiReturnType,
  OptionType,
  MethodType,
  MaterialType,
} from '~types/index';
import { METHOD_OPTIONS, MATERIAL_OPTIONS } from '~constants/index';
import { fetchApi } from '~api/fetchApi';
import Refresh from '~assets/images/refresh.png';

function App() {
  const [list, setList] = useState<ApiReturnType[]>([]);
  const [methodList, setMethodList] = useState<OptionType[]>(METHOD_OPTIONS);
  const [materialList, setMaterialList] =
    useState<OptionType[]>(MATERIAL_OPTIONS);
  const [inBusiness, setInBusiness] = useState<boolean>(false);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const data = await fetchApi();
        setList(data);
      } catch (e) {
        console.log(e);
      }
    };
    handleFetch();
  }, []);

  const handleItemCard = useCallback(() => {
    const methodFilter: MethodType[] = methodList
      .map(({ name, checked }) => (checked ? name : ''))
      .filter((one) => one !== '') as MethodType[];
    const materialFilter: MaterialType[] = materialList
      .map(({ name, checked }) => (checked ? name : ''))
      .filter((one) => one !== '') as MaterialType[];
    let result: ApiReturnType[] = list;

    if (inBusiness) {
      result = result.filter(({ status }) => status === '상담중');
    }
    // 가공 방식 필터가 있을 때
    if (methodFilter.length) {
      result = result.filter(({ method }) =>
        methodFilter.every((one) => method.includes(one)),
      );
    }
    // 재료 필터가 있을 때
    if (materialFilter.length) {
      result = result.filter(({ material }) =>
        materialFilter.every((one) => material.includes(one)),
      );
    }
    if (list.length && !result.length) return <DefaultContainer />;
    return result.map((item, idx) => <ItemCard key={idx} requestInfo={item} />);
  }, [list, methodList, materialList, inBusiness]);

  const handleFilterChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const filter = (prev: OptionType[]) => {
        return prev.map((option) =>
          option.id === e.target.id
            ? { ...option, checked: !option.checked }
            : option,
        );
      };
      if (METHOD_OPTIONS.some((one) => one.name === e.target.id)) {
        setMethodList((prev) => filter(prev));
        return;
      }
      setMaterialList((prev) => filter(prev));
    },
    [],
  );

  const handleToggle = useCallback(() => {
    setInBusiness((prev) => !prev);
  }, []);

  const handleFilterReset = useCallback(() => {
    const handleReset = () => {
      setMethodList((prev) => prev.map((one) => ({ ...one, checked: false })));
      setMaterialList((prev) =>
        prev.map((one) => ({ ...one, checked: false })),
      );
    };
    if (
      methodList.some(({ checked }) => checked) ||
      materialList.some(({ checked }) => checked)
    ) {
      return (
        <Button type="borderless" imageSrc={Refresh} onClick={handleReset}>
          필터링 리셋
        </Button>
      );
    }
    return <></>;
  }, [methodList, materialList]);

  return (
    <>
      <Navigation />
      <Container>
        <Wrapper>
          <DashboardTitleContainer>
            <h1>들어온 요청</h1>
            <p>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
          </DashboardTitleContainer>
          <FilterContainer>
            <Filter>
              <Select
                title="가공방식"
                options={methodList}
                onChange={handleFilterChange}
              />
              <Select
                title="재료"
                options={materialList}
                onChange={handleFilterChange}
              />
              {handleFilterReset()}
            </Filter>
            <ToggleSection>
              <Toggle onClick={handleToggle} active={inBusiness} />
              <ToggleText>상담중인 요청만 보기</ToggleText>
            </ToggleSection>
          </FilterContainer>
          <ContentContainer>
            {list.length ? handleItemCard() : '요청 정보를 받아오는 중입니다.'}
          </ContentContainer>
        </Wrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 155px;
  width: 100%;
  height: calc(100vh - 80px);
  overflow-y: auto;

  @media screen and (max-width: 767px) {
    height: calc(100vh - 48px);
    padding: 24px 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  width: 1130px;
`;

const DashboardTitleContainer = styled.div`
  h1 {
    font-weight: 600;
    font-size: 1.42rem;
    line-height: 1.6em;
  }
  p {
    font-weight: 400;
    font-size: 1.14rem;
    line-height: 1.5em;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.42em;
  }
`;

const Filter = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const ToggleSection = styled.div`
  display: flex;
  align-items: center;
`;

const ToggleText = styled.span`
  margin-left: 16px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;

  @media screen and (max-width: 767px) {
    justify-content: center;
  }
`;

export default App;
