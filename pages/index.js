import { getSideProjectsAPI } from '../api/api'
import { linkResolver } from '../helpers/linkResolver'
import Head from 'next/head'
import Layout from '../components/layout'
import styles from './index.css'
import Link from 'next/link'
import '../global/global-styles.css'

const Index = ({ projects = [] }) => (
  <Layout>
    <Head>
      <title key="title">Markus Wilson</title>
      <meta key="description" name="description" content="UX Designer from Glasgow, Scotland" />
      <meta key="og:title" property="og:title" content="Markus Wilson" />
      <meta key="og:description" property="og:description" content="UX Designer from Glasgow, Scotland" />
    </Head>

    <div className='hero flex'>
      <div className='flexi twelve'>
        <div className='hero--content'>
          <h1>Hey 👋</h1>
          <p>I'm Markus, a UX Designer from sunny Glasgow Scotland, helping companies create beautiful and functional products.</p>
          <p>Currently working with mixed reality at <a href='https://soluis.com'>Soluis</a>. Previously <a href='https://itison.com'>itison.com</a>.</p>
        </div>
      </div>
    </div>

    <div className='side-projects flex flexi-top'>
      <div className='flexi twelve'>
        <div className='section-title'>On the side</div>
      </div>
      {projects.map((side_project, index) => (
       <div key={index} className='flexi six'>
         <Link
           as={linkResolver(side_project)}
           href={`/side_project?slug=${side_project.uid}`}
           passHref
           >
           <a><img src={side_project.data.image.url} alt={side_project.data.image.alt} /></a>
         </Link>
         <h3>{side_project.data.title[0].text}</h3>
         <p>
          <Link
            prefetch
            as={linkResolver(side_project)}
            href={`/side_project?slug=${side_project.uid}`}
            passHref
            >
           <a>{side_project.data.title[0].text}</a>
           </Link>
           - {side_project.data.description[0].text}
           </p>
       </div>
      ))}
     </div>

  </Layout>
)

Index.getInitialProps = async () => {
  const response = await getSideProjectsAPI()
  return {
    projects: response.results
  }
}

export default Index
