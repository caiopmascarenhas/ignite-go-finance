import React from 'react';
import {
  Amount,
  CartegoryName,
  Cateogry,
  Container,
  Date,
  Footer,
  Icon,
  Title
} from './styles';
interface Category {
  name: string;
  icon: string;
}
export interface TransactionCardProps {
  type: 'positive' | 'negative';
  title: string;
  amount: string;
  category: Category
  date: string;
}
interface Props {
  data: TransactionCardProps
}

export function TransactionCard({ data }: Props) {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </Amount>
      <Footer>
        <Cateogry>
          <Icon name={data.category.icon} />
          <CartegoryName>{data.category.name}</CartegoryName>
        </Cateogry>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  )
}