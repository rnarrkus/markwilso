import React, { Component } from 'react'
import { RichText } from 'prismic-reactjs'
import { getResumeAPI } from '../api/api'
import Head from 'next/head'
import linkResolver from '../helpers/linkResolver'
import Layout from '../components/layout'

const Resume = ({ resume = [] }) => (
  <Layout>
    <Head>
      <title key="title">Markus Wilson | Curriculum Vitae</title>
      <meta key="og:title" property="og:title" content="Markus Wilson Curriculum Vitae" />
    </Head>

    <div className='cv flex'>
      <div className='flexi twelve'>
        <h1>Curriculum vitae</h1>
        {resume.map((res, index) => (
          <div key={index}>
            {res.data.company.map((dat, index) => (
              <div
                key={index}
                className='cv-section'
                >
                {dat.url.url ?
                  <p className='cv-section--head'><strong><a href={dat.url.url}>{dat.companyname[0].text}</a></strong>: {dat.position[0].text}</p> :
                  <p className='cv-section--head'><strong>{dat.companyname[0].text}</strong>: {dat.position[0].text}</p>}
                <small>{dat.timeperiod[0].text}</small>
                {RichText.render(dat.description, linkResolver)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </Layout>
)
Resume.getInitialProps = async () => {
  const response = await getResumeAPI()
  return {
    resume: response.results
  }
}

export default Resume
