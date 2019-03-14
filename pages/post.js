import React, { Component } from 'react'
import { RichText } from 'prismic-reactjs'
import { getPostAPI } from '../api/api'
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

  render() {
    const post = this.props.post.data
    return (
      <Layout>
        <div className='post flex'>
          <div className='flexi twelve'>

            <article>
              <h1>{post.title.length ? post.title[0].text : ''}</h1>
              {RichText.render(post.body, linkResolver)}
            </article>

          </div>
        </div>
      </Layout>
    )
  }
}

export default Post
