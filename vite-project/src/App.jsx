import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/main";
import { PopBrowse } from "./components/popups/popBrowse/PopBrowse";
import { PopNewCard } from "./components/popups/popNewCard/PopNewCard";
import { PopUser } from "./components/popups/popUser/PopUser";
import { cardList } from "./data";

function App() {
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
    setCards([... cards, newCard])

  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="wrapper">
      <PopUser />

      <PopNewCard />

      <PopBrowse />

      <Header addCard={addCard} />

      {isLoading ? <p className="container loader">Данные загружаются...</p> : <Main cards={cards} />}
      
    </div>
  );
}

export default App;
