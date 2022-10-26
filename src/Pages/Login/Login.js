import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaEnvelopeSquare } from 'react-icons/fa'
import { AuthContext } from '../../Contexts/AuthProvider/Authprovider';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const [error, setError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [success, setSuccess] = useState(false);
    const { providerLogin, githublogIn, signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleGithubSignIn = () => {
        githublogIn(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        if (password.length < 6) {
            setPasswordError('Please should be at least 6 characters.')
        }

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })

    }


    return (
        <div className=' w-50 mx-auto'>
            <div>
                <h1 className='text-primary'>Please Login !!!</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    {success && <p className='text-success'>User Created Successfully</p>}
                    <Form.Text className='text-danger'>
                        {error}
                    </Form.Text>
                </Form>
            </div>
            <div>
                <ButtonGroup vertical>
                    <Button onClick={handleGoogleSignIn} className='mb-2 mt-4' variant='outline-primary'><FaGoogle></FaGoogle> Login With Google</Button>
                    <Button onClick={handleGithubSignIn} className='mb-2' variant='outline-dark'><FaGithub></FaGithub> Login With Github</Button>
                    <Button onClick={handleSubmit} className='mb-2' variant='outline-secondary'><FaEnvelopeSquare></FaEnvelopeSquare> Login With Email</Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export default Login;