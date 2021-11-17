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
    transition: background .4s ease-in-out;
    background-color: ${colorDark.colorPrimary};
    header {
      /* background-color: ${colorDark.colorPrimary}aa; */
      backdrop-filter: blur(3.5px);
      h1:hover {
        transition: border-bottom .3s ease-out;
        border-bottom: 1px solid ${colorDark.colorTextPrimary};
      }
    }
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
    section {
      .border-color {
        border: 2px solid ${colorDark.colorTextThird};
      }
      button {
        background-color: ${colorDark.colorTextThird};
      }
      .home-head {
        svg {
          color: ${colorDark.colorTextPrimary};
          &:hover {
            color: ${colorDark.colorTextSecondary};
          }
        }
      }
      .home-art figure {
        background-color: ${colorDark.colorSecondary};
        border: .4rem solid ${colorDark.colorSecondary};
      }
    }
    nav span, .btn-svg {
      transition: transform .3s;
      &:hover {
        outline: 1px solid ${colorDark.colorTextPrimary};
        outline-offset: -1px;
        transform: translateY(10%);
      }
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
    transition: background .4s ease-in-out;
    background-color: ${colorLight.colorPrimary};
    color: ${colorLight.colorTextPrimary};
    header {
      backdrop-filter: blur(3px);
      h1:hover {
        transition: border-bottom .3s ease-out;
        border-bottom: 1px solid ${colorLight.colorSecondary};
      }
    }
    .card-background {
      background-color: ${colorLight.colorSecondary}
    }
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
    section {
      .border-color {
        border: 2px solid ${colorLight.colorTextPrimary};
        user-select: none;
        box-shadow: 0px 1px 2px ${colorLight.colorTextSecondary};
      }
      button {
        background-color: ${colorLight.colorSecondary};
        color: ${colorLight.colorPrimary};
        user-select: none;
      }
      .home-head {
        svg {
          color: ${colorLight.colorTextPrimary};
          &:hover {
            color: ${colorLight.colorTextPrimary}aa;
          }
        }
      }

      .home-art figure {
        background-color: transparent;
        border: .4rem solid transparent;
      }
    }
    nav span, .btn-svg {
      transition: transform .3s;
      &:hover {
        outline: 1px solid ${colorLight.colorTextPrimary};
        outline-offset: -1px;
        transform: translateY(10%);
      }
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
