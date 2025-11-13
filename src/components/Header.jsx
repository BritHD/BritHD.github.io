function Header() {
  return (
    <header className="flex flex-row h-[60px] fixed top-0 left-0 z-50 w-full border-b backdrop-blur">
      <p className="text flex h-full mx-3 items-center text-nowrap text-black text-2xl">Brit Dao</p>
      <div className="flex flex-row h-full justify-around items-center ml-auto mr-10 w-[500px]">
        <a href='#home'><div className="p-1 m-1 text-center w-[72px] md:w-[100px]">Home</div></a>
        <a href='#experience'><div className="p-1 m-1 text-center w-[72px] md:w-[100px]">Experience</div></a>
        <a href='#skilllist'><div className="p-1 m-1 text-center w-[72px] md:w-[100px]">Skills</div></a>
        <a href='#projects'><div className="p-1 m-1 text-center w-[72px] md:w-[100px]">Projects</div></a>
        <a href='#contact'><div className="p-1 m-1 text-center w-[72px] md:w-[100px]">Contact</div></a>
      </div>
    </header>
  )
}
export default Header