function Header() {
  const logoRickandMorty =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1280px-Rick_and_Morty.svg.png'
  return (
    <>
      <header>
        <img className='logo' src={logoRickandMorty} alt='' />
      </header>
    </>
  )
}

export default Header
