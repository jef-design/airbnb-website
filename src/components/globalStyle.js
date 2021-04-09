import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html{
  scroll-behavior: smooth;
  box-sizing: border-box;
}
*,*::before,*::after{
  box-sizing: inherit;
  line-height: 1.43;
}
body {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fff;
  /* color: #484848; */
  
}
ul{
  list-style: none;
}
body::-webkit-scrollbar {
  display: none;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`