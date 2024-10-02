import { routes } from "../../router/routes";
import * as S from "../RegistrationPage/registration.styled";
import { Link, useNavigate } from "react-router-dom";

export const LoginPage = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate(routes.main);
  };
  return (
    <S.Wrapper>
      <S.Container>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTtl>
              <h2>Вход</h2>
            </S.ModalTtl>
            <S.ModalForm id="formLogIn" action="#">
              <S.ModalInput
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <S.ModalInput
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
              <S.ModalBtn id="btnEnter" onClick={handleLogin}>
                Войти
              </S.ModalBtn>
              <S.ModalFormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to={routes.register}>Регистрируйтесь здесь</Link>
              </S.ModalFormGroup>
            </S.ModalForm>
          </S.ModalBlock>
        </S.Modal>
      </S.Container>
    </S.Wrapper>
  );
};
