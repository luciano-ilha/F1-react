import '../styles/Header.styles.css'

const Header = () => {
  return (
    <header className='header-custom'>
      <nav className='header-content'>
        <img src="../../assets/just_f1_logo.svg" alt="F1 logo" className='header-image'/>
        <div className='header-menu'>
          <a href="#" className='text-sm font-semibold leading-6 text-white hover:text-white'>Drivers</a>
          <a href="#" className='text-sm font-semibold leading-6 text-white hover:text-white'>Teams</a>
          <a href="#" className='text-sm font-semibold leading-6 text-white hover:text-white'>Circuits</a>
        </div>
      </nav>
    </header>
  )
};

export default Header;
