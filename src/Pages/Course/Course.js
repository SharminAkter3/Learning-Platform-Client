import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CourseDetails from '../CourseDetails/CourseDetails';

const Course = () => {
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourse(data));
    }, [])


    return (
        <Container>
            <Row>
                <Col>
                    {
                        course.map(c => <p key={c.id}>
                            <Card style={{ width: '22rem' }}>
                                <Card.Header className='fs-2 fw-bold text-center'>{c.name}</Card.Header>
                                <Card.Body>
                                    <Card.Img style={{ width: '16rem', ms: '2' }} variant="top" src={c.photo_URL} />
                                    <Card.Text>
                                        {
                                            c.details.length > 200 ?
                                                <p>{c.details.slice(0, 200) + '...'}<Link to={`/courses/${c.id}`}>Read more</Link></p>
                                                : <p>{c.details}</p>
                                        }
                                    </Card.Text>
                                    <Button variant="primary"><Link text="light" to={`/courseDetails/${c.id}`}>Show Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </p>)
                    }</Col>
            </Row>

        </Container>
    );
};

export default Course;