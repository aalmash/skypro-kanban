import "./App.css";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/main";
import { PopBrowse } from "./components/popups/popBrowse/PopBrowse";
import { PopNewCard } from "./components/popups/popNewCard/PopNewCard";
import { PopUser } from "./components/popups/popUser/PopUser";

function App() {
  return (
    <div className="wrapper">
      <PopUser />

      <PopNewCard />

      <PopBrowse />

      <Header />

      <Main />
    </div>
  );
}

export default App;
