import { useState } from "react";
import { GlobalStyle } from "./globalStyle.styled";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./theme";
import { AppRoutes } from "./router/AppRoutes";

function App() {
  const [changeTheme, setChangeTheme] = useState("light");
  
  return (
    <ThemeProvider theme={changeTheme === "light" ? light : dark}>
      <GlobalStyle />
      <AppRoutes changeTheme={changeTheme} setChangeTheme={setChangeTheme}/>
    </ThemeProvider>
  );
}

export default App;
