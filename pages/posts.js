import { getPostsAPI } from '../api/api'
import { linkResolver } from '../helpers/linkResolver'
import Layout from '../components/layout'
import Link from 'next/link'
import '../global/global-styles.css'

const Posts = ({ posts = [] }) => (
  <Layout>
    <div className='posts flex'>
      <div className='flexi twelve'>
        <div className='posts--content'>
          <h1>Posts.</h1>
          <p>Not the ramblings of a mad man 👀</p>
          <ul className='posts-list'>
           {posts.map((post, index) => (
             <li key={index}>
               <Link
                 prefetch
                 as={linkResolver(post)}
                 href={`/post?slug=${post.uid}`}
                 passHref
                 >
                 <a>{post.data.title[0].text}</a>
               </Link>
             </li>
           ))}
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

Posts.getInitialProps = async () => {
  const response = await getPostsAPI()
  return {
    posts: response.results
  }
}

export default Posts
