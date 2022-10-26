import React from 'react';
import './Home.css'

const Home = () => {

    return (
        <div className='home align-middle justify-content-center m-2 p-2'>
            <div className='home-title ms-4 mt-5 me-4 p-3 w-100'>
                <h4 className='fs-1'>Welcome To My <small className='text-primary fw-bold fs-1'>Web Development</small> Website</h4>
                <p className='fs-5'>Web development refers to the building, creating, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.</p>
            </div>
            <div className='w-20 h-40'>
                <img src="https://img.freepik.com/free-vector/programer-learning-programming-languages-by-computer-laptop-website-tutorial-channel-online-education-class-vector-illustration-software-development-programming-languages-learning_1150-55428.jpg?w=996&t=st=1666702831~exp=1666703431~hmac=0842bd3ac50a4b8b4c3ebb87760d20d27603f3cc274518cc57fca498f50abf5b" alt="" />
            </div>
        </div>
    );
};

export default Home;