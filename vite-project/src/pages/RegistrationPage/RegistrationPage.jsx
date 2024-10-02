import { routes } from "../../router/routes";
import * as S from "./registration.styled"
import { Link } from "react-router-dom";

export const RegistrationPage = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTtl>
              <h2>Регистрация</h2>
            </S.ModalTtl>
            <S.ModalForm id="formLogUp" action="#">
              <S.ModalInput
                className="first-name"
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
              />
              <S.ModalInput
                className="login"
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <S.ModalInput
                className="password-first"
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              <S.ModalBtn
                id="SignUpEnter"
              >
                <a href="../main.html">Зарегистрироваться</a>{" "}
              </S.ModalBtn>
              <S.ModalFormGroup>
                <p>
                  Уже есть аккаунт? <Link to={routes.login}>Войдите здесь</Link>
                </p>
              </S.ModalFormGroup>
            </S.ModalForm>
          </S.ModalBlock>
        </S.Modal>
      </S.Container>
    </S.Wrapper>
  );
};
