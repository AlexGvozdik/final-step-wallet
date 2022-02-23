import { PieChart } from 'react-minimal-pie-chart';
import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getCategories } from '../../redux/categories/index'

const colors = [
  '#FED057',
  '#FFD8D0',
  '#FD9498',
  '#C5BAFF',
  '#6E78E8',
  '#4A56E2',
  '#81E1FF',
  '#24CCA7',
  '#00AD84',
];

const PieChartComponent = () => {

  const AllCategories = useSelector(getCategories)

  const totalFields = {}
  for (const item of AllCategories) {
    if (item.name === 'income' || item.name === 'spending') {
        totalFields[item.name] = item.summ
    }
    continue
  }

  const groupFields = []
  for (const item of AllCategories) {
    if (item.name === 'income' || item.name === 'spending') {
        continue
    }
    groupFields.push(item)
  }

  const total = groupFields.reduce((acc, item) => acc + item.summ, 0);

  const categories = groupFields.map((item, index) => ({
  title: item.name,
  value: (item.summ * 100) / total,
  color: colors[index],
  }));


  return (
    <Wrapper
      style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto' }}
    >
      <Title>Статистика</Title>
      <PieChartWrapper>
        {groupFields.length > 0 ? <CustomPieChart lineWidth={25} animate radius={50} data={categories} /> : null}
        <Total>
          {totalFields.spending > 0 ? ('₴ ' + totalFields.spending) : null}
        </Total>
      </PieChartWrapper>
    </Wrapper>
  );
};

export default PieChartComponent;

const Wrapper = styled.div``;
const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;

  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;
`;
const Total = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
`;
const PieChartWrapper = styled.div`
  position: relative;

  width: 320px;
  height: 320px;

  @media screen and (max-width: 320px) {
    width: 280px;
    height: 280px;
  }
`;
const CustomPieChart = styled(PieChart)`
  width: 320px;
  height: 320px;

  @media screen and (max-width: 320px) {
    width: 280px;
    height: 280px;
  }
`;
