import React, { Component } from 'react'
import { RichText } from 'prismic-reactjs'
import { getSideProjectAPI } from '../api/api'
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

  render() {
    const project = this.props.project.data
    return (
      <Layout>
        <div className='project flex'>
          <div className='flexi twelve'>

            <article>
              <img src={project.image.url} alt={project.image.alt}/>
              <h1>{project.title.length ? project.title[0].text : ''}</h1>
              {RichText.render(project.body, linkResolver)}
            </article>
            
          </div>
        </div>
      </Layout>
    )
  }
}

export default Project
