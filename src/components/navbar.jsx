import React from 'react';

const Navbar = ({ totalCounters }) => {
	return (
		<nav
			className='navbar navbar-light '
			style={{ backgroundColor: '#e3f2fd' }}
		>
			<a
				className='navbar-brand font-weight-bold'
				href='#home'
				style={{ fontSize: 26 }}
			>
				Counter{' '}
				<span className='badge badge-pill badge-secondary'>
					{totalCounters}
				</span>
			</a>
		</nav>
	);
};

export default Navbar;
