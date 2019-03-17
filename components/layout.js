import Header from './header'
import Footer from './footer'
import Router from 'next/router'
import NProgress from 'nprogress'
import Head from 'next/head'
import '../global/nanogram.min.css'
import './nprogress/nprogress.css'

Router.onRouteChangeStart = url => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const Layout = (props) => (
  <div className='wrap'>

    <Head>
    </Head>

    <Header />

    {props.children}

    <Footer />

    <style global jsx>{`
      html,
      body {
        min-height: 100%;
      }
      body {
        font-family: 'Helvetica Neue', 'Roboto', sans-serif;
        color: #000000;
      }
      h1 {
        font-size: 36px;
        letter-spacing: -0.5px;
        line-height: 48px;
        font-weight: 800;
      }
      p {
        font-size: 16px;
        letter-spacing: 0;
        line-height: 28px;
        margin-bottom: 24px;
      }
      .section-title {
        color: #B3B3B3;
        font-size: 14px;
        letter-spacing: 0;
        line-height: 26px;
        font-weight: 500;
      }
      .side-projects h3 {
        margin-top:8px;
      }
      .side-projects a:nth-of-type(1) {
        margin-right: 4px;
      }
      a {
        font-size: 16px;
        letter-spacing: 0;
        line-height: 28px;
        color: #007CFF;
        font-weight: 500;
        text-decoration: none;
      }
      a:hover {
        color: #000;
      }
      .wrap {
        max-width: 782px;
        margin: auto;
      }

      .nav a {
        margin: 0 8px;
        font-size: 14px;
      }

      .nav a:first-of-type {
        margin: 0 8px 0 0;
      }

      .nav a:last-of-type {
        margin: 0 0 0 8px;
      }

      .hero {
        text-align: left;
        margin-top: 64px;
      }

      .hero p {
        max-width: 375px;
      }

      .side-projects {
        margin-top: 102px;
      }

      .side-projects img {
        max-width: 100%;
        border-radius: 12px;
        transition: 0.3s;
      }

      .side-projects img:hover {
        box-shadow: 0 6px 25px 0 rgba(0,0,0,0.1);
      }

      .posts {
        text-align: left;
        margin-top: 64px;
      }

      .posts-list {
        margin-left:0;
      }

      .posts ul {
        list-style: none;
      }

      .posts ul li {
        list-style: none;
        margin-bottom: 8px;
      }
      .posts ul li:last-of-type {
        margin-bottom: 0;
      }
      .post {
        margin-top: 64px;
      }
      .post img {
        max-width: 100%;
      }

      .post p {
        max-width: 100%;
      }

      .project img {
        border-radius: 16px;
        max-width: 100%;
      }

      .project p {
        max-width: 100%;
      }

      .footer {
        margin: 102px 0 64px 0;
      }

      .footer h3 {
        font-size: 28px;
        line-height: 36px;
        margin-bottom: 44px;
      }

      .footer--links {
        margin-top: 44px;
      }

      .footer--links a {
        margin: 8px;
        font-size: 14px;
      }

      .footer--links a:first-of-type {
        margin-left: 0;
      }

      .footer--links a:last-of-type {
        margin-right: 0;
      }

      .button {
        text-align: center;
        outline: 0;
        border: 0;
        background: #007CFF;
        padding: 12px 64px;
        text-transform: uppercase;
        font-size: 12px;
        color: #ffffff;
        border-radius: 4px;
        cursor: pointer;
        box-shadow: 0 2px 6px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        transform: translateY(0);
      }
      .button:hover {
        color: #ffffff;
        box-shadow: 0 4px 16px 0 rgba(0,0,0,0.2);
        transform: translateY(-8px);
        -webkit-transform: translateY(-8px);
        -moz-transform: translateY(-8px);
      }
      .cv {
        margin-top: 64px;
      }

      .cv-section {
        margin-top: 64px;
      }
      .cv-section p:first-of-type {
        margin-bottom: 0;
      }
      .cv-section--head {
        font-size: 18px;
      }
      .cv-section--head a {
        font-size: 18px;
      }
      .cv-section small {
        display: block;
        color: #B3B3B3;
        font-size: 14px;
        letter-spacing: 0;
        line-height: 26px;
        font-weight: 500;
        margin-bottom: 24px;
      }
      /*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */
      /*! typography.js v0.16.19 | The MIT License | github.com/KyleAMathews/typography.js */

      html {
          font-family: sans-serif;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%
      }

      body {
          margin: 0
      }

      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      main,
      menu,
      nav,
      section,
      summary {
          display: block
      }

      audio,
      canvas,
      progress,
      video {
          display: inline-block
      }

      audio:not([controls]) {
          display: none;
          height: 0
      }

      progress {
          vertical-align: baseline
      }

      [hidden],
      template {
          display: none
      }

      a {
          background-color: transparent;
          -webkit-text-decoration-skip: objects
      }

      a:active,
      a:hover {
          outline-width: 0
      }

      abbr[title] {
          border-bottom: none;
          text-decoration: underline;
          text-decoration: underline dotted
      }

      b,
      strong {
          font-weight: inherit;
          font-weight: bolder
      }

      dfn {
          font-style: italic
      }

      h1 {
          font-size: 2em;
          margin: .67em 0
      }

      mark {
          background-color: #ff0;
          color: #000
      }

      small {
          font-size: 80%
      }

      sub,
      sup {
          font-size: 75%;
          line-height: 0;
          position: relative;
          vertical-align: baseline
      }

      sub {
          bottom: -.25em
      }

      sup {
          top: -.5em
      }

      img {
          border-style: none
      }

      svg:not(:root) {
          overflow: hidden
      }

      code,
      kbd,
      pre,
      samp {
          font-family: monospace, monospace;
          font-size: 1em
      }

      figure {
          margin: 1em 40px
      }

      hr {
          box-sizing: content-box;
          height: 0;
          overflow: visible
      }

      button,
      input,
      optgroup,
      select,
      textarea {
          font: inherit;
          margin: 0
      }

      optgroup {
          font-weight: 700
      }

      button,
      input {
          overflow: visible
      }

      button,
      select {
          text-transform: none
      }

      [type=reset],
      [type=submit],
      button,
      html [type=button] {
          -webkit-appearance: button
      }

      [type=button]::-moz-focus-inner,
      [type=reset]::-moz-focus-inner,
      [type=submit]::-moz-focus-inner,
      button::-moz-focus-inner {
          border-style: none;
          padding: 0
      }

      [type=button]:-moz-focusring,
      [type=reset]:-moz-focusring,
      [type=submit]:-moz-focusring,
      button:-moz-focusring {
          outline: 1px dotted ButtonText
      }

      fieldset {
          border: 1px solid silver;
          margin: 0 2px;
          padding: .35em .625em .75em
      }

      legend {
          box-sizing: border-box;
          color: inherit;
          display: table;
          max-width: 100%;
          padding: 0;
          white-space: normal
      }

      textarea {
          overflow: auto
      }

      [type=checkbox],
      [type=radio] {
          box-sizing: border-box;
          padding: 0
      }

      [type=number]::-webkit-inner-spin-button,
      [type=number]::-webkit-outer-spin-button {
          height: auto
      }

      [type=search] {
          -webkit-appearance: textfield;
          outline-offset: -2px
      }

      [type=search]::-webkit-search-cancel-button,
      [type=search]::-webkit-search-decoration {
          -webkit-appearance: none
      }

      ::-webkit-input-placeholder {
          color: inherit;
          opacity: .54
      }

      ::-webkit-file-upload-button {
          -webkit-appearance: button;
          font: inherit
      }

      html {
          font-size: 100%;
          line-height: 1.75em;
          box-sizing: border-box;
          overflow-y: scroll;
      }

      * {
          box-sizing: inherit;
      }

      *:before {
          box-sizing: inherit;
      }

      *:after {
          box-sizing: inherit;
      }

      body {
          color: hsla(0, 0%, 0%, 1);
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Roboto, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
          font-weight: normal;
          word-wrap: break-word;
      }

      img {
          max-width: 100%;
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 0.875rem;
      }

      h1 {
          margin-left: 0;
          margin-right: 0;
          margin-top: 2.625rem;
          padding-bottom: calc(0.4375rem - 1px);
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.3125rem;
          color: hsla(0, 0%, 0%, 1);
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Roboto, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
          font-weight: 700;
          text-rendering: optimizeLegibility;
          font-size: 2rem;
          line-height: 2.625rem;
      }

      h2 {
          margin-left: 0;
          margin-right: 0;
          margin-top: 1.75rem;
          padding-bottom: calc(0.4375rem - 1px);
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 0.4375rem;
          color: hsla(0, 0%, 0%, 1);
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Roboto, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
          font-weight: 600;
          text-rendering: optimizeLegibility;
          font-size: 1.51572rem;
          line-height: 2.625rem;
          border-bottom: 1px solid hsla(0, 0%, 0%, 0.07);
      }

      h3 {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 0.875rem;
          color: hsla(0, 0%, 0%, 1);
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Roboto, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
          font-weight: 600;
          text-rendering: optimizeLegibility;
          font-size: 1.31951rem;
          line-height: 1.75rem;
      }

      h4 {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 0.875rem;
          color: hsla(0, 0%, 0%, 1);
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Roboto, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
          font-weight: 600;
          text-rendering: optimizeLegibility;
          font-size: 1rem;
          line-height: 1.75rem;
      }

      h5 {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 0.875rem;
          color: hsla(0, 0%, 0%, 1);
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Roboto, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
          font-weight: 600;
          text-rendering: optimizeLegibility;
          font-size: 0.87055rem;
          line-height: 1.75rem;
      }

      h6 {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 0.875rem;
          color: hsla(0, 0%, 0%, 1);
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Roboto, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
          font-weight: 600;
          text-rendering: optimizeLegibility;
          font-size: 0.81225rem;
          line-height: 1.75rem;
      }

      hgroup {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 0.875rem;
      }

      ul {
          margin-left: 1.75rem;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 0.875rem;
          list-style-position: outside;
          list-style-image: none;
      }

      ol {
          margin-left: 1.75rem;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 0.875rem;
          list-style-position: outside;
          list-style-image: none;
      }

      dl {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 0.875rem;
      }

      dd {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 0.875rem;
      }

      p {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 0.875rem;
      }

      figure {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 0.875rem;
      }

      pre {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 0.875rem;
          font-size: 0.85rem;
          line-height: 1.42;
          background: hsla(0, 0%, 0%, 0.04);
          border-radius: 3px;
          overflow: auto;
          padding: 0.875rem;
      }

      table {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 0.875rem;
          font-size: 1rem;
          line-height: 1.75rem;
          border-collapse: collapse;
          width: 100%;
      }

      fieldset {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 0.875rem;
      }

      blockquote {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: calc(0.875rem - 1px);
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 0.875rem;
          border-left: 2px solid hsla(0, 0%, 0%, 0.13);
          color: hsla(0, 0%, 0%, 0.53);
      }

      form {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 0.875rem;
      }

      noscript {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 0.875rem;
      }

      iframe {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 0.875rem;
      }

      hr {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: calc(0.875rem - 1px);
          background: hsla(0, 0%, 0%, 0.2);
          border: none;
          height: 1px;
      }

      address {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 0.875rem;
      }

      b {
          font-weight: 600;
      }

      strong {
          font-weight: 600;
      }

      dt {
          font-weight: 600;
      }

      th {
          font-weight: 600;
      }

      li {
          margin-bottom: calc(0.875rem / 2);
      }

      ol li {
          padding-left: 0;
      }

      ul li {
          padding-left: 0;
      }

      li > ol {
          margin-left: 1.75rem;
          margin-bottom: calc(0.875rem / 2);
          margin-top: calc(0.875rem / 2);
      }

      li > ul {
          margin-left: 1.75rem;
          margin-bottom: calc(0.875rem / 2);
          margin-top: calc(0.875rem / 2);
      }

      code {
          font-size: 0.85rem;
          line-height: 1.75rem;
      }

      kbd {
          font-size: 0.85rem;
          line-height: 1.75rem;
      }

      samp {
          font-size: 0.85rem;
          line-height: 1.75rem;
      }

      abbr {
          border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
          cursor: help;
      }

      acronym {
          border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
          cursor: help;
      }

      abbr[title] {
          border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
          cursor: help;
          text-decoration: none;
      }

      thead {
          text-align: left;
      }

      td,
      th {
          text-align: left;
          border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
          font-feature-settings: tnum;
          padding-left: 1.16667rem;
          padding-right: 1.16667rem;
          padding-top: 0.875rem;
          padding-bottom: calc(0.875rem - 1px);
      }

      th:first-child,
      td:first-child {
          padding-left: 0;
      }

      th:last-child,
      td:last-child {
          padding-right: 0;
      }

      tt,
      code {
          background-color: hsla(0, 0%, 0%, 0.04);
          border-radius: 3px;
          font-family: Menlo, "Roboto Mono", "Liberation Mono", Consolas, Courier, monospace;
          padding: 0;
          padding-top: 0.2em;
          padding-bottom: 0.2em;
      }

      pre code {
          background: none;
          line-height: 1.42;
      }

      code:before,
      code:after,
      tt:before,
      tt:after {
          letter-spacing: -0.2em;
          content: " ";
      }

      pre code:before,
      pre code:after,
      pre tt:before,
      pre tt:after {
          content: "";
      }

      h3,
      h4,
      h5,
      h6 {
          margin-bottom: 0.875rem;
          margin-top: 1.75rem;
      }

      ol,
      ul {
          margin-left: 2.1875rem;
      }

      li>ol,
      li>ul {
          margin-left: 2.1875rem;
      }

      a {
          color: #007CFF;
          text-decoration: none;
      }
    `}</style>
  </div>
)

export default Layout
