
import Logo from './assets/logo-text.png'


const Nav = () => {
    return (
       <div className='sticky top-0 z-50 bg-white'>
         <div className='max-w-7xl mx-auto px-4 py-4'>
            <nav className='flex justify-between items-center'>
                <label className="btn btn-circle swap swap-rotate md:hidden">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" />

  {/* hamburger icon */}
  <svg
    className="swap-off fill-current"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 512 512">
    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
  </svg>

  {/* close icon */}
  <svg
    className="swap-on fill-current"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 512 512">
    <polygon
      points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
  </svg>
</label>
                <div>
                    <img src={Logo} alt="Dev Stack" />
                </div>
                <ul className=' hidden md:flex gap-5 items-center '>
                    <li className='text-[#DB2777] font-semibold'><a href="">Home</a></li>
                    <li className='text-[#475569]'><a href="">Technologies</a></li>
                    <li className='text-[#475569]'><a href="">Projects</a></li>
                    <li className='text-[#475569]'><a href="">About</a></li>
                    <li className='text-[#475569]'><a href="">Contact</a></li>
                </ul>
                <div className='flex gap-4'>
                    <button className='text-[#475569] cursor-pointer rounded-2xl' >Sign In</button>
                    <button className="btn btn-active btn-secondary rounded-3xl">Sign Up</button>
                    
                </div> 
            </nav>
        </div>
       </div>
    );
};

export default Nav;