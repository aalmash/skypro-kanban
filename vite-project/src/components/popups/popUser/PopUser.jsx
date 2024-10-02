import { Link, useNavigate } from "react-router-dom";
import * as S from "./popUser.styled"
import { routes } from "../../../router/routes";

export const PopUser = (setIsAuth) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuth(false);
    navigate(routes.login);
  };
  return (
    <S.PopExit id="popExit">
      <S.PopExitCont>
        <S.PopExitBlock>
          <S.PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTtl>
          <form className="pop-exit__form" id="formExit" action="#">
            <S.PopExitFormGroup>
              <S.PopExitYes id="exitYes">
                <a onClick={handleLogout}>Да, выйти</a>
              </S.PopExitYes>
              <S.PopExitNo id="exitNo">
                <Link to={routes.main}>Нет, остаться</Link>{" "}
              </S.PopExitNo>
            </S.PopExitFormGroup>
          </form>
        </S.PopExitBlock>
      </S.PopExitCont>
    </S.PopExit>
  );
};
