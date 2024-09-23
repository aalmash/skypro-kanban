import { Column } from "../column/Column";
import { statusList } from "../../data";
import * as S from "./main.styled"
import { Container } from "../../globalStyle.styled";

export const Main = ({ cards }) => {
  return (
    <S.Main>
      <Container>
        <S.MainBlock>
          <S.MainContent>
            {statusList.map((status, id) => (
              <Column
                key={id}
                title={status}
                cards={cards.filter((card) => card.status === status)}
              />
            ))}
            ;
          </S.MainContent>
        </S.MainBlock>
      </Container>
    </S.Main>
  );
};
