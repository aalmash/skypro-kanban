import { Card } from "../card/Card";
import * as S from "./column.styled";

export const Column = ({ title, cards }) => {
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <p>{title}</p>
      </S.ColumnTitle>
      <S.Cards>
        {cards.map((card) => (
          <Card
            key={card.id}
            category={card.theme}
            topic={card.title}
            date={card.date}
          />
        ))}
      </S.Cards>
    </S.MainColumn>
  );
};
