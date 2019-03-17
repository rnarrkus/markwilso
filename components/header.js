import Link from 'next/link'

const Header = () => (
  <nav>
    <div className='nav flex'>
      <div className='flexi twelve'>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
        <Link prefetch href="/posts">
          <a>Posts</a>
        </Link>
        <Link prefetch href="/cv">
          <a>CV</a>
        </Link>
      </div>
    </div>
  </nav>
)

export default Header
