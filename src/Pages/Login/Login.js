import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaEnvelopeSquare } from 'react-icons/fa'
import { AuthContext } from '../../Contexts/AuthProvider/Authprovider';

const Login = () => {
    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <h2>login page</h2>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant='outline-primary'><FaGoogle></FaGoogle> Login With Google</Button>
                <Button className='mb-2' variant='outline-dark'><FaGithub></FaGithub> Login With Github</Button>
                <Button className='mb-2' variant='outline-secondary'><FaEnvelopeSquare></FaEnvelopeSquare> Login With Email</Button>
            </ButtonGroup>
        </div>
    );
};

export default Login;