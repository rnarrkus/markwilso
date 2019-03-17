import React, { Component } from 'react'
import { RichText } from 'prismic-reactjs'
import { getSideProjectAPI } from '../api/api'
import Head from 'next/head'
import linkResolver from '../helpers/linkResolver'
import Layout from '../components/layout'
import Link from 'next/link'

class Project extends Component {
  static async getInitialProps(context) {
    const { slug } = context.query
    const response = await getSideProjectAPI(slug)
    return {
      project: response
    }
  }

  addJSONLD(project) {
    return {
      __html: `{
      "@context": "http://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
      },
      "headline": "${project.og_title[0].text}",
      "image": [
        "${project.og_image.url}"
      ],
      "author": {
        "@type": "Person",
        "name": "Markus Wilson"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Markus Wilson",
      },
      "description": "${project.og_description[0].text}"
    }`
    };
  }

  render() {
    const project = this.props.project.data
    return (
      <Layout>
        <Head>
          <title key="title">{project.og_title[0].text}</title>
          <meta key="description" name="description" content={project.og_description[0].text} />
          <meta key="og:type" property="og:type" content="article" />
          <meta key="og:title" property="og:title" content={project.og_title[0].text} />
          <meta key="og:description" property="og:description" content={project.og_description[0].text} />
          <meta key="og:image" property="og:image" content={project.og_image.url} />
        </Head>
        <div className='project flex'>
          <div className='flexi twelve'>

            <article>
              <img src={project.image.url} alt={project.image.alt}/>
              <h1>{project.title.length ? project.title[0].text : ''}</h1>
              {RichText.render(project.body, linkResolver)}
            </article>

          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={this.addJSONLD(project)}
        />
      </Layout>
    )
  }
}

export default Project
