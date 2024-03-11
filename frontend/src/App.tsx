import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Movimentos } from "./pages/Movimentos";

function App() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Movimentos />
      </ThemeProvider>
    )
}

export default App
