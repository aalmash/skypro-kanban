import { useState } from "react";
import * as S from "./header.styled";
import { Container } from "../../globalStyle.styled";

export const Header = ({ addCard, setChangeTheme, changeTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleShowUser = () => {
    setIsOpen((prevState) => !prevState);
  };

  const onChangeTheme = () => {
    setChangeTheme(changeTheme === "light" ? "dark" : "light");
  };

  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <a href="" target="_self">
              <img
                src={changeTheme === "light" ? "/logo.png" : "/logo_dark.png"}
                alt="logo"
              />
            </a>
          </S.HeaderLogo>
          <S.HeaderNav>
            <S.HeaderBtnNew>
              <a onClick={addCard}>Создать новую задачу</a>
            </S.HeaderBtnNew>
            <S.HeaderUser onClick={toggleShowUser}>Ivan Ivanov</S.HeaderUser>
          </S.HeaderNav>
          {isOpen && (
            <S.HeaderPopUserSet id="user-set-target">
              <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
              <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
              <S.PopUserSetTheme>
                <p>Темная тема</p>
                <input
                  checked={changeTheme === "dark"}
                  onClick={onChangeTheme}
                  type="checkbox"
                  name="checkbox"
                />
              </S.PopUserSetTheme>
              <S.HeaderPopUserSetButton type="button">
                <a href="#popExit">Выйти</a>
              </S.HeaderPopUserSetButton>
            </S.HeaderPopUserSet>
          )}
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
};
