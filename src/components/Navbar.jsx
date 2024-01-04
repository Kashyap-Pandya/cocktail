import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className='flex h-10 sm:h-20 bg-emerald-300 items-center justify-between py-8 pl-4 pr-8 sm:p-8'>
			<div>
				<img src='/logo3.svg' alt='' className='h-12 sm:h-14' />
			</div>
			<div className='flex gap-4 sm:gap-8'>
				<NavLink to='/' className=' hover:text-emerald-700'>
					Home
				</NavLink>
				<NavLink to='/about' className=' hover:text-emerald-700'>
					About
				</NavLink>
			</div>
		</nav>
	);
};
export default Navbar;
