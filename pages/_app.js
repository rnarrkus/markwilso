import App, { Container } from 'next/app'
import React from 'react'
import Head from 'next/head'
import { SEO } from '../config'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title key="title">{SEO.title}</title>
          <meta
            key="description"
            name="description"
            content={SEO.description}
          />
          <meta
            key="twitter:card"
            name="twitter:card"
            content={SEO.twitter.cardType}
          />
          <meta
            key="twitter:site"
            name="twitter:site"
            content={SEO.twitter.handle}
          />
          <meta
            key="og:url"
            property="og:url"
            content={SEO.openGraph.url}
          />
          <meta
            key="og:type"
            property="og:type"
            content={SEO.openGraph.type}
          />
          <meta
            key="og:title"
            property="og:title"
            content={SEO.openGraph.title}
          />
          <meta
            key="og:description"
            property="og:description"
            content={SEO.openGraph.description}
          />
          <meta
            key="og:image"
            property="og:image"
            content={SEO.openGraph.image}
          />
          <meta
            key="og:image:width"
            property="og:image:width"
            content={SEO.openGraph.imageWidth}
          />
          <meta
            key="og:image:height"
            property="og:image:height"
            content={SEO.openGraph.imageHeight}
          />
          <meta
            key="og:locale"
            property="og:locale"
            content={SEO.openGraph.locale}
          />
          <meta name="viewport" content="initial-scale=1.0, width=device-width, user-scalable=no" />
          <meta name="HandheldFriendly" content="true" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="format-detection" content="telephone=no" />
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}
