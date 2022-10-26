import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CourseDetails = () => {
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courseDetails/:id')
            .then(res => res.json())
            .then(data => setCourse(data));
    }, [])
    return (
        <div>
            {
                course.map(c => <p key={c.id}>
                    <Card style={{ width: '22rem' }}>
                        <Card.Header className='fs-2 fw-bold text-center'>{c.name}</Card.Header>
                        <Card.Body>
                            <Card.Img style={{ width: '16rem', ms: '2' }} variant="top" src={c.photo_URL} />
                            <Card.Text>
                                {c.details}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </p>)
            }
        </div>
    );
};

export default CourseDetails;