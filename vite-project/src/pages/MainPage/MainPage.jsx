import "../../App.css";
import { cardList } from "../../data";
import { Wrapper } from "../../globalStyle.styled";
import { useEffect, useState } from "react";
import { Header } from "../../components/header/Header";
import { Main } from "../../components/main/main";
import { PopNewCard } from "../../components/popups/popNewCard/PopNewCard";
import { Outlet } from "react-router-dom";

export const MainPage = ({ changeTheme, setChangeTheme }) => {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(false);

  const addCard = () => {
    const newCard = {
      id: cards.length + 1,
      theme: "Web Design",
      title: "Название задачи",
      date: "30.10.23",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 0);
  }, []);

  return (
    <Wrapper>
      <Outlet />

      <PopNewCard />

      <Header
        addCard={addCard}
        setChangeTheme={setChangeTheme}
        changeTheme={changeTheme}
      />

      {isLoading ? (
        <p className="container loader">Данные загружаются...</p>
      ) : (
        <Main cards={cards} />
      )}
    </Wrapper>
  );
};
