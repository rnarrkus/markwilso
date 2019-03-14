import Link from 'next/link'

const Header = () => (
  <nav>
    <div className='nav flex'>
      <div className='flexi twelve'>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
        <Link href="/cv">
          <a>CV</a>
        </Link>
      </div>
    </div>
  </nav>
)

export default Header
