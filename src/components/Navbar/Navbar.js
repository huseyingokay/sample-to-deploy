import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button';
import './Navbar.css';

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] =useState(true);

	function handleClick() {
		setClick(!click);
	};

	function closeMobileMenu() {
		setClick(false);
	};
	
	function showButton() {
		if(window.innerWidth <= 960)
			setButton(false);
		else
			setButton(true);
	};

	useEffect(() => {
		showButton()
	}, []);

	window.addEventListener('resize', showButton);
	
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        HUSEYIN GOKAY
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className='nav-item'>
							<Link to='/' className='nav-links' onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/resume' className='nav-links' onClick={closeMobileMenu}>
								Resume
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/accomplishments' className='nav-links' onClick={closeMobileMenu}>
								Accomplishments
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
								Sign-Up
							</Link>
						</li>
					</ul>
					{ button && <Button buttonStyle='btn--outline' buttonSize='btn-medium'> Sign Up </Button> }
                </div>
            </nav>
        </>
    )
}

export default Navbar
