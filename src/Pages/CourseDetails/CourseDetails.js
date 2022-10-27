import React from 'react';
import { Card } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import LeftSideNav from '../../layout/LeftSideNav/LeftSideNav';
import './CourseDetails.css';
import jsPDF from 'jspdf';


const CourseDetails = () => {

    const pdfGenerate = () => {
        var doc = new jsPDF('landscape', 'px', 'a4', 'false');
        doc.addImage(`${photo_URL}`, 56, 50, 500, 400);
        doc.text(120, 410, `${details}`)
        doc.save('a.pdf')
    }

    const course = useLoaderData();
    const { id, name, details, photo_URL } = course;
    return (
        <div>
            <h2 className='text-center text-2xl'>Courses Details</h2>
            <div className='course-details'>
                <div className='me-4'>
                    <LeftSideNav></LeftSideNav>
                </div>


                <div className='text-center' >
                    <Card style={{ width: '27rem' }}>
                        <Card.Header className='fs-2 fw-bold'>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    {name}
                                </div>
                                <div onClick={pdfGenerate}>
                                    <FaDownload></FaDownload>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Img style={{ width: '16rem', height: '17rem', ms: '2' }} variant="top" src={photo_URL} />
                            <Card.Text>
                                {details}
                            </Card.Text>
                            <Link className='font-bold' to={`/checkout/courses/${id}`}><button className='btn btn-primary w-full'>Get premium access</button></Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>

    );
};

export default CourseDetails;