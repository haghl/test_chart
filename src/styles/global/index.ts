import { css } from '@emotion/react'
import Bold from '@assets/fonts/Pretendard-Bold.woff2'
import Light from '@assets/fonts/Pretendard-Light.woff2'
import Regular from '@assets/fonts/Pretendard-Regular.woff2'
import Medium from '@assets/fonts/Pretendard-Medium.woff2'
import SemiBold from '@assets/fonts/Pretendard-SemiBold.woff2'

export const baseStyle = css`
  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: bold;
    src: url(${Bold}) format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: normal;
    src: url(${Regular}) format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    src: url(${Medium}) format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 900;
    src: url(${SemiBold}) format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: lighter;
    src: url(${Light}) format('woff2');
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  html,
  body {
    font-family: 'Pretendard', sans-serif;
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`
