import React from 'react';
import { Link } from 'react-router-dom';

const CoursesList = (props) => {
    const { id, name } = props.course;

    return (
        <li className='mb-2 px-2'>
            <Link to={`/courses/${id}`}>
                <button className="btn btn-outline btn-secondary w-full">{name}</button>
            </Link>
        </li>
    );
};
export default CoursesList;