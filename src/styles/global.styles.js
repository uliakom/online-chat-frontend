import { css, Global } from '@emotion/react';

export const themes = {
  light: {
    title: 'light',
    colors: {
      body: '#F6F3E0',
      primary: '#4D4D4D',
      secondary: '#3e45c3',
      line: '#808080',
      text: '#000000',
      hovers: '#cfad56',
    },
  },
  dark: {
    title: 'dark',
    colors: {
      body: '#282c34',
      primary: '#fff',
      secondary: '#3e45c3',
      line: '#fff',
      text: '#fff',
      hovers: '#f4de8b',
    },
  },
};

// додати в globalstyles background-color: ${theme.colors.body};

export const GlobalStyle = ({ theme }) => (
  <Global
    styles={css`
      body {
        margin: 0;
       font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
        background-color: #282c34;
        transition: background-color 0.6s ease-in-out;
      }
      *,
      *::before,
      *::after {
        padding: 0;
        margin: 0;
        border: 0;
        /* box-sizing: border-box; */
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      h1,
      h2,
      h3,
      h4,
      p,
      li {
        margin: 0;
        padding: 0;
      }

      button {
        cursor: pointer;
        background: inherit;
      }

      input,
      /* button, */
      textarea,
      select {
        font: inherit;
      }

      img {
        display: block;
        max-width: 100%;
        height: auto;
      }

      a {
        text-decoration: none;
        font-style: normal;
        color: inherit;
        display: block;
      }

      }

    `}
  />
);