import { createGlobalStyle } from "styled-components";
import { colorDark, colorLight } from "./theme";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  #__next {
    min-height: 100vh;
  }
  html {
    min-height: 100vh;
    position: relative;
  }
  body {
    position: relative;
    min-height: 100vh;
    font-family: Matter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    overflow-x: hidden;
  }

  .dark {
    background-color: ${colorDark.colorPrimary} ;
    .card-background {
      background-color: ${colorDark.colorSecondary}
    }
    color: ${colorDark.colorTextPrimary};
    .text-primary {
      color: ${colorDark.colorTextPrimary};
    }
    .text-secondary {
      color: ${colorDark.colorTextSecondary};
    }
    .text-yellow {
      color: ${colorDark.colorTextThird};
    }

    header button svg {
      color: ${colorDark.colorTextPrimary};
    }

    .current {
      .btn-svg, span {
        background-color: ${colorDark.colorTextPrimary};
        color: ${colorDark.colorPrimary};
      }
      svg {
        color: ${colorDark.colorPrimary};
      }
    }
  }

  .light {
    transition: background .3s;
    background-color: ${colorLight.colorPrimary};
    .card-background {
      background-color: ${colorLight.colorSecondary}
    }
    color: ${colorLight.colorTextPrimary};
    .text-primary {
      color: ${colorLight.colorTextPrimary};
    }
    .text-secondary {
      color: ${colorLight.colorTextSecondary};
    }
    .text-yellow {
      color: ${colorLight.colorTextThird};
    }

    header button svg {
      color: ${colorLight.colorTextPrimary};
    }

    .current {
      span, .btn-svg {
        background-color: ${colorLight.colorTextPrimary};
        color: ${colorLight.colorPrimary};
      }
      svg {
        color: ${colorLight.colorPrimary};
      }
    }
  }
`
