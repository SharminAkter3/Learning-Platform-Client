import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div>
            <div>
                <h2 className='fs-4 text-primary m-3 p-3 d-flex justify-content-center'>All Courses : {courses.length}</h2>
            </div>
            <Container className='d-flex'>
                <div className='fs-4 ms-4 p-2'>
                    {
                        courses.map(c => <p key={c.id}>
                            <Link to={`/courses/${c.id}`}>{c.name}</Link>
                        </p>)
                    }
                </div>
                <div>
                    <Course></Course>
                </div>
            </Container>
        </div>
    );
};

export default Courses;