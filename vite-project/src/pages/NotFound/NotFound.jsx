import * as S from "./notFound.styled";

export const NotFound = () => {
  return (
    <S.Block404>
      <h1>Oops! Страница, которую вы ищете, не найдена</h1>
      <img src="/404.svg" alt="404-svg" />
    </S.Block404>
  );
};
