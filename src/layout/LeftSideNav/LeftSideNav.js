import React, { useContext } from 'react';
import CoursesList from '../../Pages/CoursesLIst/CoursesList';
import { DataContext } from '../Main';

const LeftSideNav = () => {
    const { courses } = useContext(DataContext);
    return (

        <div className="card md:w-full  bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title py-2">
                    Courses Link
                </h2>
                <div className="card-actions justify-center md:justify-start">
                    <ul>
                        {
                            courses.map(course => <CoursesList key={course.id} course={course} />)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;