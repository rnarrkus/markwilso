import Link from 'next/link'

const Footer = () => (
  <footer>
    <div className='footer flex'>
      <div className='flexi twelve'>
        <h3>Say hello.</h3>
        <a className='button'>Email Me</a>
        <div className='footer--links'>
          <a href='https://github.com/rnarrkus'>GitHub</a>
          <a href='https://dribbble.com/rnarrkus'>Dribbble</a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
