import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/main";
import { PopBrowse } from "./components/popups/popBrowse/PopBrowse";
import { PopNewCard } from "./components/popups/popNewCard/PopNewCard";
import { PopUser } from "./components/popups/popUser/PopUser";
import { cardList } from "./data";
import { GlobalStyle, Wrapper } from "./globalStyle.styled";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./theme";

function App() {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(false);
  const [changeTheme, setChangeTheme] = useState("light");

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
    <ThemeProvider theme={changeTheme === "light" ? light : dark}>
      <GlobalStyle />
      <Wrapper>
        <PopUser />

        <PopNewCard />

        <PopBrowse />

        <Header addCard={addCard} setChangeTheme={setChangeTheme} changeTheme={changeTheme}/>

        {isLoading ? (
          <p className="container loader">Данные загружаются...</p>
        ) : (
          <Main cards={cards} />
        )}
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
