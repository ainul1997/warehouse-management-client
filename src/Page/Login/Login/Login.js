
import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

import SocialLogin from '../../Shard/Social/SocialLogin';


const Login = () => {
    const navigate = useNavigate();
    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });


    }

    return (
        <div className='container w-50 mx-auto'>

            <h2 className='text-primary text-center mt-2'>Please Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" >
                    <Form.Control type="email" name='email' placeholder="email" required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>

            <div className=' d-flex align-items-center mt-5  gap-3'>
                <p >New to Client? <Link to="/register" className='text-primary pe-auto text-decoration-none' > Please Register</Link> </p>
                <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none'  >Reset Password</button> </p>
            </div>
            {<SocialLogin></SocialLogin>}
        </div>
    );
};

export default Login;