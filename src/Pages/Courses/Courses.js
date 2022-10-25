import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <div className='d-flex'>
                <div className='fs-4 ms-4 p-2'>
                    {
                        courses.map(course => <p key={course.id}>
                            <Link to={`/courses/${course.id}`}>{course.name}</Link>
                        </p>)
                    }
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Courses;