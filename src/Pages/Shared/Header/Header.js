import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/Authprovider';
import { FaBars, FaTimes } from 'react-icons/fa'

import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };


    const toggleTheme = () => {
        setIsClicked(isClicked => !isClicked);
    }

    let color1 = "orange"
    let color2 = "blue"

    return (
        <div className='d-flex justify-content-between header'>
            <div className='d-flex logo'>
                <img src="https://files.helpdocs.io/DQYx96GtMn/other/1553267885698/1174215797-dec-302-c-416-c-52-eaac-5-fc-46.png" alt="" />
                <h2>Web Development</h2>
            </div>

            <div className={isMobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setIsMobile(false)}>
                <Link to='/'>Home</Link>
                <Link to='/courses'>Courses</Link>
                <Link to='/faq'>FAQ</Link>
                <Link to='/blog'>Blog</Link>
                <Link>
                    {
                        user?.uid ?
                            <>
                                <Button variant='light' onClick={handleLogOut}>LogOut</Button>
                                <Link onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                                    {user?.photoURL2 ?
                                        <Image roundedCircle src={user?.photoURL2}></Image>
                                        : <FaUser></FaUser>
                                    }
                                    {isHovering &&
                                        <small>{user?.displayName}</small>}
                                </Link>
                            </>
                            :
                            <>
                                <Link to='/login'>Login</Link>
                                <Link to='/register'>Register</Link>
                            </>
                    }
                </Link>

                <Link href="#" className='btn-toggle fs-4' onClick={() => toggleTheme()} style={isClicked ? ({ backgroundColor: `#181818`, color: `#fff` }) : (
                    { backgroundImage: `linear-gradient(135deg, ${color1}, ${color2})` }
                )}>{isClicked ? 'Light' : "Dark"}</Link>

            </div>
            <div>
                <Link className='mobile-menu' onClick={() => setIsMobile(!isMobile)}>
                    {
                        isMobile ? <FaTimes></FaTimes> : <FaBars></FaBars>
                    }

                </Link>

            </div>
        </div >
    );
};

export default Header;