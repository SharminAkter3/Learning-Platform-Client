import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CourseCard.css'

const CourseCard = (props) => {
    const { id, name, details, photo_URL } = props.course;
    return (
        <Card style={{ width: '22rem' }}>
            <Card.Header className='fs-2 fw-bold text-center'>{name}</Card.Header>
            <Card.Body>
                <Card.Img style={{ width: '16rem', height: '17rem', ms: '2' }} variant="top" src={photo_URL} />
                <Card.Text>
                    {
                        details.length > 200 ?
                            <p>{details.slice(0, 200) + '...'}<Link to={`/courses/${id}`}>Read more</Link></p>
                            : <p>{details}</p>
                    }
                </Card.Text>
                <Link className='font-bold' to={`/courses/${id}`}><button className='btn btn-primary w-full'>Details</button></Link>

            </Card.Body>
        </Card>







        // <div className="card md:w-full bg-base-100 shadow-xl">


        //     <img src={photo_URL} alt="" className='card-image' />

        //     <div className="card-body">
        //         <div className='w-60 round py-1'>
        //             <h2 className="text-center text-white border border-white font-bold">
        //                 {name}
        //             </h2>
        //         </div>
        //         <div className='text-center w-full mt-2 py-1'>
        //             <Link className='font-bold' to={`/courses/${id}`}><button className='btn btn-primary w-full'>Details</button></Link>
        //         </div>
        //     </div>
        // </div>
    );
};

export default CourseCard;
