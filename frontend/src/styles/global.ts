import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;    
    }

    
      /* Estilos da barra de rolagem */
      ::-webkit-scrollbar {
        width: 10px;
    }

    /* Estilos do botão de rolagem */
    ::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 5px;
    }

    /* Estilos da trilha da barra de rolagem */
    ::-webkit-scrollbar-track {
        background-color: #f1f1f1;
        border-radius: 5px;
    }

    /* Estilos ao passar o mouse sobre a barra de rolagem */
    ::-webkit-scrollbar-thumb:hover {
        background-color: #555;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme['green-500']};
    }

    body {
        background-color: ${props => props.theme['gray-800']};
        color: ${props => props.theme['gray-100']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1rem Roboto, sans-serif;
    }
`;