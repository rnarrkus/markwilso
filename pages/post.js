import React, { Component } from 'react'
import { RichText } from 'prismic-reactjs'
import { getPostAPI } from '../api/api'
import Head from 'next/head'
import linkResolver from '../helpers/linkResolver'
import Layout from '../components/layout'
import Link from 'next/link'

class Post extends Component {
  static async getInitialProps(context) {
    const { slug } = context.query
    const response = await getPostAPI(slug)
    return {
      post: response
    }
  }

  addJSONLD(post) {
    return {
      __html: `{
      "@context": "http://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
      },
      "headline": "${post.og_title[0].text}",
      "image": [
        "${post.og_image.url}"
      ],
      "author": {
        "@type": "Person",
        "name": "Markus Wilson"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Markus Wilson",
      }
    }`
    };
  }

  render() {
    const post = this.props.post.data
    return (
      <Layout>
        <Head>
          <title key="title">{post.og_title[0].text}</title>
          <meta key="og:type" property="og:type" content="article" />
          <meta key="og:title" property="og:title" content={post.og_title[0].text} />
          <meta key="og:image" property="og:image" content={post.og_image.url} />
        </Head>

        <div className='post flex'>
          <div className='flexi twelve'>

            <article>
              <h1>{post.title.length ? post.title[0].text : ''}</h1>
              {RichText.render(post.body, linkResolver)}
            </article>

          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={this.addJSONLD(post)}
        />
      </Layout>
    )
  }
}

export default Post
