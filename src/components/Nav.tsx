
import Logo from './assets/logo-text.png'


const Nav = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 py-4'>
            <nav className='flex justify-between items-center'>
                <div>
                    <img src={Logo} alt="" />
                </div>
                <ul className=' hidden md:flex gap-5 items-center lg:flex'>
                    <li className='text-[#DB2777] font-semibold'><a href="">Home</a></li>
                    <li className='text-[#475569]'><a href="">Technologies</a></li>
                    <li className='text-[#475569]'><a href="">Projects</a></li>
                    <li className='text-[#475569]'><a href="">About</a></li>
                    <li className='text-[#475569]'><a href="Contact"></a></li>
                </ul>
                <div className='flex gap-4'>
                    <button className='text-[#475569] cursor-pointer rounded-2xl' >Sign In</button>
                    <button className="btn btn-active btn-secondary rounded-3xl">Sign Up</button>
                    
                </div> 
            </nav>
        </div>
    );
};

export default Nav;