import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaEnvelopeSquare } from 'react-icons/fa'

const Login = () => {
    return (
        <div>
            <h2>login page</h2>
            <ButtonGroup vertical>
                <Button className='mb-2' variant='outline-primary'><FaGoogle></FaGoogle> Login With Google</Button>
                <Button className='mb-2' variant='outline-dark'><FaGithub></FaGithub> Login With Github</Button>
                <Button className='mb-2' variant='outline-secondary'><FaEnvelopeSquare></FaEnvelopeSquare> Login With Email</Button>
            </ButtonGroup>
        </div>
    );
};

export default Login;