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
      <link rel='stylesheet' href='https://necolas.github.io/normalize.css/8.0.1/normalize.css' />
      <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,600,700,800" rel="stylesheet" />
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
        font-size: 20px;
        margin: 24px 0 24px 0;
      }
      .side-projects a {
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
        margin-top: 48px;
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
    `}</style>
  </div>
)

export default Layout
