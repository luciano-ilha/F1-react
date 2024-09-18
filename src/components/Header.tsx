import '../styles/Header.styles.css'

const Header = () => {
  return (
    <header className='header-custom'>
      <nav className='header-content'>
        <a href="home">
          <img src="../../assets/just_f1_logo.svg" alt="F1 logo" className='header-image' />
        </a>
        <div className='header-menu'>
          <a href="drivers" className='text-sm font-semibold leading-6 text-white hover:text-white'>Drivers</a>
          <a href="teams" className='text-sm font-semibold leading-6 text-white hover:text-white'>Teams</a>
          <a href="circuits" className='text-sm font-semibold leading-6 text-white hover:text-white'>Circuits</a>
        </div>
      </nav>
    </header>
  )
};

export default Header;
