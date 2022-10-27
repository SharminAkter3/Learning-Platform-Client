import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CheckOut = () => {
    const notify = () => toast("WOW!!! CheckOut Complete!!!");
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
                    <button onClick={notify} className='btn btn-primary w-full'>ChcekOut</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CheckOut;