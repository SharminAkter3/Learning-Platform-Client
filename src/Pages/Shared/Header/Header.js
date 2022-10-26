import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/Authprovider';

import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className='d-flex justify-content-between header'>
            <div className='d-flex'>
                <img src="https://files.helpdocs.io/DQYx96GtMn/other/1553267885698/1174215797-dec-302-c-416-c-52-eaac-5-fc-46.png" alt="" />
                <h2>Web Development</h2>
            </div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/courses/:id'>Courses</Link>
                <Link to='/faq'>FAQ</Link>
                <Link to='/blog'>Blog</Link>
                <Link>
                    {
                        user?.uid ?
                            <>
                                <span> {user?.displayName}</span>
                                <Button variant='light' onClick={handleLogOut}>LogOut</Button>
                            </>
                            :
                            <>
                                <Link to='/login'>Login</Link>
                                <Link to='/register'>Register</Link>
                            </>
                    }
                </Link>
                <Link>
                    {user?.photoURL2 ?
                        <Image roundedCircle src={user?.photoURL2}></Image>
                        : <FaUser></FaUser>
                    }
                </Link>
            </div>
        </div>
    );
};

export default Header;