import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import LeftSideNav from '../../layout/LeftSideNav/LeftSideNav';
import { DataContext } from '../../layout/Main';
import CourseCard from '../CourseCard/CourseCard';
import './Courses.css'

const Courses = () => {
    const { courses } = useContext(DataContext);

    return (
        <div className='py-10'>
            <div>
                <h2 className='fs-4 text-primary m-3 p-3 d-flex justify-content-center'>All Courses</h2>
                <div className='px-10 md:px-20 flex flex-col md:flex-row gap-10 mt-10'>
                </div>
                <Container className='courses'>
                    <div className='me-4'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                    <div>
                        <div className='courseCard'>
                            {/* all course cards  */}
                            {
                                courses.map(course => <CourseCard key={course.id} course={course} />)
                            }
                        </div>
                    </div>
                </Container>
            </div>

        </div>
    );
};

export default Courses;