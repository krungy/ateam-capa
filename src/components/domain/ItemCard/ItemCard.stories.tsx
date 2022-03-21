import { ComponentStory, ComponentMeta } from '@storybook/react';
import ItemCard from './ItemCard';

export default {
  title: 'domain/ItemCard',
  component: ItemCard,
} as ComponentMeta<typeof ItemCard>;

const Template: ComponentStory<typeof ItemCard> = ({
  requestInfo,
  ...args
}) => {
  return <ItemCard requestInfo={requestInfo} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  requestInfo: {
    id: 1,
    title: '자동차 시제품 제작',
    client: 'A 고객사',
    due: '2020.12.14',
    count: 2,
    amount: 100,
    method: ['밀링', '선반'],
    material: ['알루미늄'],
    status: '대기중',
  },
};

export const InBusiness = Template.bind({});
InBusiness.args = {
  requestInfo: {
    id: 1,
    title: '자동차 시제품 제작',
    client: 'A 고객사',
    due: '2020.12.14',
    count: 2,
    amount: 100,
    method: ['밀링', '선반'],
    material: ['알루미늄'],
    status: '상담중',
  },
};
