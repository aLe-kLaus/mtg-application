import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  background-color: #d6d6d6;

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
    border-radius: 4px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
}
`;
