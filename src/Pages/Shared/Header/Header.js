import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

const Header = () => {
    return (
        <div className='d-flex justify-content-between header'>
            <div className='d-flex'>
                <img src="https://files.helpdocs.io/DQYx96GtMn/other/1553267885698/1174215797-dec-302-c-416-c-52-eaac-5-fc-46.png" alt="" />
                <h2>Web Development</h2>
            </div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/courses'>Courses</Link>
                <Link to='/faq'>FAQ</Link>
                <Link to='/blog'>Blog</Link>
            </div>
        </div>
    );
};

export default Header;