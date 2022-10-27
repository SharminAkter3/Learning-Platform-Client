import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData();
    const { name, id, details, photo_URL } = course;

    return (
        <div className='text-center m-4 p-4'>
            <Card style={{ width: '27rem' }}>
                <Card.Header className='fs-2 fw-bold'>
                    <div>
                        {name}
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Img style={{ width: '16rem', height: '17rem', ms: '2' }} variant="top" src={photo_URL} />
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <button className='btn btn-primary w-full'>ChcekOut</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CheckOut;